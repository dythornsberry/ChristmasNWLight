/**
 * Post-build prerender script for ChristmasNW.
 *
 * 1. Spins up a tiny static server on dist/public
 * 2. Launches Puppeteer and visits every route
 * 3. Waits for React to hydrate + PageHead to update <head>
 * 4. Captures the full HTML and writes it to the correct path
 *    e.g. /about  ->  dist/public/about/index.html
 *
 * Usage:  node scripts/prerender.mjs
 */

import { createServer } from "node:http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import puppeteer from "puppeteer";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "..", "dist", "public");
const PORT = 4173;
const SITE_URL = "https://christmasnw.com";

// All static routes to pre-render (no dynamic :slug routes, no 404)
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/faq",
  "/contact",
  "/testimonials",
  "/service-areas",
  "/product-guide",
  "/investment-guide",
  "/blog",
  "/blog/christmas-lighting-trends-2026",
  "/blog/warm-white-vs-multicolor-lights",
  "/blog/professional-christmas-light-installation-guide",
  "/blog/book-christmas-lights-september",
  "/blog/christmas-light-installation-safety",
  "/blog/how-much-does-christmas-light-installation-cost",
  "/privacy-policy",
  "/bellevue",
  "/kirkland",
  "/seattle",
  "/woodinville",
  "/bothell",
  "/kenmore",
  "/redmond",
  "/sammamish",
  "/newcastle",
  "/mercer-island",
  "/shoreline",
  "/lake-forest-park",
  "/issaquah",
  "/mill-creek",
];

// ---------- tiny static file server ----------

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

      // SPA fallback — if path has no extension and file doesn't exist, serve index.html
      if (!extname(filePath) && !existsSync(filePath)) {
        filePath = join(DIST, "index.html");
      }
      // Also try adding index.html for directory paths
      if (!extname(filePath) && existsSync(filePath)) {
        filePath = join(filePath, "index.html");
      }

      try {
        const data = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        // SPA fallback
        try {
          const data = readFileSync(join(DIST, "index.html"));
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        } catch {
          res.writeHead(404);
          res.end("Not found");
        }
      }
    });
    server.listen(PORT, () => {
      console.log(`Static server on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

// ---------- prerender ----------

async function prerender() {
  // 1. Start server
  const server = await startServer();

  // 2. Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const total = ROUTES.length;
  let done = 0;

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    // Block third-party requests (Elfsight, Google Analytics, etc.) to keep HTML clean
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const reqUrl = req.url();
      if (reqUrl.startsWith(`http://localhost:${PORT}`)) {
        req.continue();
      } else {
        req.abort();
      }
    });

    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait for React root to have children (app rendered)
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.children.length > 0;
        },
        { timeout: 15000 },
      );

      // Give a moment for PageHead useEffect to fire and update <head>
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

      // Client-rendered adjacent text nodes are separate in the live DOM, but
      // HTML serialization merges them. React's server renderer uses empty
      // comments to preserve those boundaries for hydration, so add the same
      // separators before saving the snapshot.
      await page.evaluate(() => {
        const root = document.getElementById("root");
        if (!root) return;

        const parents = [root, ...root.querySelectorAll("*")];
        for (const parent of parents) {
          let child = parent.firstChild;
          while (child?.nextSibling) {
            const next = child.nextSibling;
            if (child.nodeType === Node.TEXT_NODE && next.nodeType === Node.TEXT_NODE) {
              parent.insertBefore(document.createComment(""), next);
            }
            child = next;
          }
        }
      });

      // Get the full HTML
      let html = await page.content();

      // Fix canonical URL and og:url to use production domain
      html = html.replace(
        new RegExp(`http://localhost:${PORT}`, "g"),
        SITE_URL,
      );

      // Remove any Vite HMR / dev scripts that might have leaked
      html = html.replace(/<script[^>]*@vite[^>]*><\/script>/g, "");

      // Remove third-party injected styles/scripts (Elfsight, etc.)
      html = html.replace(/<style[^>]*data-styled[^>]*><\/style>/g, "");
      html = html.replace(/<link[^>]*elfsight[^>]*>/g, "");
      html = html.replace(/<script[^>]*elfsight[^>]*><\/script>/g, "");
      html = html.replace(/<style[^>]*>div\.eapps-widget[\s\S]*?<\/style>/g, "");

      // Flat output (about.html, not about/index.html): Cloudflare Pages serves
      // /about from about.html directly with 200, instead of 308-redirecting to
      // /about/ — keeps served URLs identical to canonicals and the sitemap.
      const outFile = route === "/"
        ? join(DIST, "index.html")
        : join(DIST, `${route.slice(1)}.html`);
      mkdirSync(dirname(outFile), { recursive: true });
      writeFileSync(outFile, html, "utf-8");

      done++;
      console.log(`[${done}/${total}] ${route} -> ${outFile.replace(DIST, "dist/public")}`);
    } catch (err) {
      console.error(`FAILED ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`\nPre-rendered ${done}/${total} routes.`);

  if (done < total) {
    process.exit(1);
  }

  writeSitemap();
}

// ---------- sitemap ----------

// Map each route to the source file whose git history drives its <lastmod>.
// Blog posts all live in blogPosts.ts; city pages each have their own file.
function routeSourceFile(route) {
  if (route === "/") return "client/src/pages/Home.tsx";
  if (route.startsWith("/blog/")) return "client/src/data/blogPosts.ts";
  const PAGE_FILES = {
    "/about": "AboutPage.tsx",
    "/services": "ServicesPage.tsx",
    "/gallery": "GalleryPage.tsx",
    "/faq": "FAQPage.tsx",
    "/contact": "ContactPage.tsx",
    "/testimonials": "TestimonialsPage.tsx",
    "/service-areas": "ServiceAreasPage.tsx",
    "/product-guide": "ProductGuide.tsx",
    "/investment-guide": "InvestmentGuide.tsx",
    "/blog": "BlogPage.tsx",
    "/privacy-policy": "PrivacyPolicy.tsx",
  };
  if (PAGE_FILES[route]) return `client/src/pages/${PAGE_FILES[route]}`;
  // City routes: /mercer-island -> MercerIslandPage.tsx
  const city = route
    .slice(1)
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  return `client/src/pages/${city}Page.tsx`;
}

function writeSitemap() {
  const repoRoot = join(__dirname, "..");
  const urls = ROUTES.map((route) => {
    let lastmod = "";
    try {
      const file = routeSourceFile(route);
      const date = execSync(`git log -1 --format=%cs -- "${file}"`, {
        cwd: repoRoot,
        encoding: "utf-8",
      }).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        lastmod = `\n    <lastmod>${date}</lastmod>`;
      }
    } catch {
      // No git available (or file untracked) — omit lastmod rather than fake it.
    }
    return `  <url>\n    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>${lastmod}\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  writeFileSync(join(DIST, "sitemap.xml"), xml, "utf-8");
  console.log(`Wrote sitemap.xml with ${ROUTES.length} URLs (git-derived lastmod).`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
