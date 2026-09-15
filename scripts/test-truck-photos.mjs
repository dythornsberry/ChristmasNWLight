import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const base = new URL(process.env.PREVIEW_URL || "http://127.0.0.1:8085");
assert(["localhost", "127.0.0.1"].includes(base.hostname), "Local preview only");
const output = "/private/tmp/christmasnw-truck-qa";
await mkdir(output, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
let checks = 0;

try {
  for (const width of [390, 768, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.setRequestInterception(true);
    page.on("request", request => {
      const url = new URL(request.url());
      if (url.origin !== base.origin || url.pathname.startsWith("/api/") || request.method() !== "GET") return request.abort();
      return request.continue();
    });

    for (const [path, selector, photo] of [
      ["/", '[data-testid="img-home-ram"]', "christmas-northwest-ram"],
      ["/about", '[data-testid="img-fleet"]', "christmas-northwest-box-truck"],
    ]) {
      await page.goto(new URL(path, base).href, { waitUntil: "domcontentloaded" });
      await page.waitForSelector(selector);
      await page.$eval(selector, image => image.scrollIntoView({ block: "center" }));
      await page.waitForFunction(selector => {
        const image = document.querySelector(selector);
        return image.complete && image.naturalWidth > 0;
      }, {}, selector);
      const details = await page.$eval(selector, image => {
        const rect = image.getBoundingClientRect();
        return {
          src: image.currentSrc,
          srcset: image.srcset,
          alt: image.alt,
          ratio: rect.width / rect.height,
          width: rect.width,
          naturalRatio: image.naturalWidth / image.naturalHeight,
          fits: rect.left >= 0 && rect.right <= innerWidth,
          overflow: document.documentElement.scrollWidth > innerWidth,
          footer: getComputedStyle(document.querySelector("footer")).backgroundColor,
        };
      });
      assert(details.src.includes(photo), "Selected photo is displayed");
      assert(details.srcset.includes("800w") && details.srcset.includes("1600w"), "Responsive sources available");
      if (details.width > 800) assert(details.src.includes("1600"), "Wide photo uses the larger source");
      assert(details.alt.length > 30, "Descriptive alternative text");
      assert(Math.abs(details.ratio - details.naturalRatio) < 0.01, "Full photo framing preserved");
      assert(details.fits && !details.overflow, "Photo fits viewport");
      assert.equal(details.footer, "rgb(8, 67, 94)", "Wrap-inspired blue footer retained");
      if (path === "/about") {
        assert.equal(await page.$$eval('[data-testid^="installer-"]', cards => cards.length), 2, "Existing crew preserved");
        assert.equal(await page.$eval("figure figcaption", caption => caption.textContent), "Our box truck beside a completed holiday lighting installation.");
      }
      const frame = await page.$(path === "/" ? ".home-team" : "main > section:first-child > div > .max-w-3xl");
      await frame.screenshot({ path: `${output}/${photo}-${width}.png` });
      await page.screenshot({ path: `${output}/${photo}-viewport-${width}.png` });
      console.log(`PASS ${++checks}: ${path} at ${width}px, selected photo and branding verified`);
    }
    assert.deepEqual(errors, [], "No JavaScript errors");
    await page.close();
  }
  console.log(`${checks} photo/layout checks passed. No lead submissions sent.`);
} finally {
  await browser.close();
}
