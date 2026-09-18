import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const base = new URL(process.env.PREVIEW_URL || "http://127.0.0.1:8085");
assert(["localhost", "127.0.0.1"].includes(base.hostname), "Local preview only");
const output = "/private/tmp/christmasnw-copy-qa";
await mkdir(output, { recursive: true });
const cities = [
  "Seattle", "Bellevue", "Kirkland", "Bothell", "Kenmore", "Woodinville",
  "Redmond", "Sammamish", "Shoreline", "Mill Creek", "Lake Forest Park",
  "Issaquah", "Newcastle", "Mercer Island",
];
const browser = await puppeteer.launch({ headless: true });
let passed = 0;
let leadRequests = 0;

try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.setViewport({ width, height: 900 });
    await page.setRequestInterception(true);
    page.on("request", request => {
      const url = new URL(request.url());
      if (url.pathname.startsWith("/api/") || request.method() !== "GET") {
        leadRequests++;
        return request.abort();
      }
      if (url.origin !== base.origin) return request.abort();
      return request.continue();
    });

    for (const name of [...cities, "about", "service-areas"]) {
      const slug = name.toLowerCase().replaceAll(" ", "-");
      await page.goto(new URL(`/${slug}`, base).href, { waitUntil: "networkidle0" });
      await page.waitForSelector("main h1");
      const state = await page.evaluate(() => ({
        text: document.querySelector("main").innerText,
        title: document.querySelector("main h1").textContent,
        titles: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        clipped: [...document.querySelectorAll("main h1, main h2, main h3, main p, main button, main a")]
          .filter(el => el.getBoundingClientRect().width > 0 && el.scrollWidth > el.clientWidth + 2)
          .map(el => el.textContent),
      }));
      assert.equal(state.titles, 1, `${slug}: one page title`);
      assert.equal(state.overflow, false, `${slug} at ${width}: no horizontal overflow`);
      assert.deepEqual(state.clipped, [], `${slug} at ${width}: text fits`);

      if (cities.includes(name)) {
        assert.equal(state.title.trim(), `Christmas light installation in ${name}`);
        assert.match(state.text, /What to expect/);
        assert.match(state.text, new RegExp(`Neighborhoods We Serve in ${name}`));
        assert.match(state.text, /starting at \$800/);
        assert.doesNotMatch(state.text, /Popular Lighting Styles|Neighborhoods We Know Best|Landmarks|Planning Resources|Trusted by families throughout|same.day service/i);
        const links = await page.$$eval('nav[aria-label="Lighting details"] a', els => els.map(el => el.getAttribute("href")));
        assert.deepEqual(links, ["/gallery", "/investment-guide", "/services"]);
        const schemas = await page.$$eval('script[type="application/ld+json"]', els => els.map(el => JSON.parse(el.textContent)));
        assert(schemas.some(schema => schema["@type"] === "BreadcrumbList"));
        assert(schemas.some(schema => schema.url === `https://christmasnw.com/${slug}`));
        await page.click(`[data-testid="city-${slug}-submit"]`);
        await page.waitForSelector(`[data-testid="city-${slug}-full-name"][aria-invalid="true"]`);
      } else if (slug === "about") {
        assert(await page.$('[data-testid="installer-ryder"]'));
        assert(await page.$('[data-testid="installer-james"]'));
        assert(await page.$('[data-testid="img-about-dylan"]'));
        assert.match(state.text, /Licensed, bonded, and insured/);
        assert.doesNotMatch(state.text, /Why Choose|peace of mind/);
        await page.$eval('[data-testid="img-fleet"]', el => el.scrollIntoView());
        await page.waitForFunction(() => {
          const img = document.querySelector('[data-testid="img-fleet"]');
          return img.complete && img.naturalWidth > 0;
        });
        await page.click('[data-testid="button-about-cta-quote"]');
        await page.waitForSelector('[data-testid="contact-submit"]');
        assert.equal(new URL(page.url()).pathname, "/contact");
      } else {
        assert.doesNotMatch(state.text, /holiday magic|Explore Nearby Pages|always looking to expand/);
        assert(await page.$('[data-testid="map-service-areas"]'));
        const areaLinks = await page.$$eval("main a", els => els.map(el => el.getAttribute("href")));
        for (const city of cities) assert(areaLinks.includes(`/${city.toLowerCase().replaceAll(" ", "-")}`));
        await page.type('[data-testid="input-zip-code"]', "98028");
        await page.click('[data-testid="button-check-zip"]');
        await page.waitForSelector('[data-testid="result-covered"]');
        await page.$eval('[data-testid="input-zip-code"]', el => el.select());
        await page.type('[data-testid="input-zip-code"]', "00000");
        await page.click('[data-testid="button-check-zip"]');
        await page.waitForSelector('[data-testid="result-not-covered"]');
        await page.click('[data-testid="button-zip-contact"]');
        await page.waitForSelector('[data-testid="contact-submit"]');
        assert.equal(new URL(page.url()).pathname, "/contact");
      }

      if (["seattle", "lake-forest-park", "about", "service-areas"].includes(slug)) {
        await page.goto(new URL(`/${slug}`, base).href, { waitUntil: "networkidle0" });
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 700) {
            scrollTo(0, y);
            await new Promise(resolve => requestAnimationFrame(resolve));
          }
          scrollTo(0, 0);
        });
        await page.screenshot({ path: `${output}/${slug}-${width}.png`, fullPage: true });
      }
      console.log(`PASS ${++passed}: ${slug} at ${width}px, copy, layout and retained functionality`);
    }
    assert.deepEqual(errors, [], `No runtime errors at ${width}px`);
    await page.close();
  }
  assert.equal(leadRequests, 0, "No lead submission attempts");
  console.log(`${passed} page/viewport checks passed. No leads submitted. Screenshots: ${output}`);
} finally {
  await browser.close();
}
