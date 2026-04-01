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
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
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
  "/year-round-services",
  "/permanent-lighting",
  "/blog",
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

      // Determine output path
      const outDir = route === "/"
        ? DIST
        : join(DIST, route);
      mkdirSync(outDir, { recursive: true });
      const outFile = join(outDir, "index.html");
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
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
