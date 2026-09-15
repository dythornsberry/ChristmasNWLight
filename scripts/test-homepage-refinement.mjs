import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const base = new URL(process.env.PREVIEW_URL || "http://127.0.0.1:8085");
assert(["localhost", "127.0.0.1"].includes(base.hostname), "Local preview only");
const output = process.env.QA_OUTPUT || "/private/tmp/christmasnw-refresh-qa";
await mkdir(output, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
let passed = 0;
const check = (name, condition) => { assert(condition, name); console.log(`PASS ${++passed}: ${name}`); };

try {
  for (const [width, height] of [[320, 667], [390, 844], [768, 1024], [1024, 768], [1366, 768], [1440, 900], [1920, 1080]]) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.setViewport({ width, height });
    await page.setRequestInterception(true);
    page.on("request", request => {
      const url = new URL(request.url());
      if (url.origin !== base.origin || url.pathname.startsWith("/api/")) return request.abort();
      return request.continue();
    });
    await page.goto(base.href, { waitUntil: "networkidle0" });
    await page.waitForSelector('[data-testid="button-hero-cta"]');
    const firstScreen = await page.evaluate(() => {
      const button = document.querySelector('[data-testid="button-hero-cta"]').getBoundingClientRect();
      const image = document.querySelector('[data-testid="home-hero-image"]');
      const review = document.querySelector(".home-review").getBoundingClientRect();
      return {
        title: document.querySelector("h1").textContent,
        singleTitle: document.querySelectorAll("h1").length === 1,
        ctaVisible: button.top >= 0 && button.bottom < innerHeight && button.height >= 44,
        nextSectionVisible: review.top < innerHeight,
        imageLoaded: image.complete && image.naturalWidth > 0,
        overflow: document.documentElement.scrollWidth > innerWidth,
      };
    });
    check(`${width}: brand, photo, quote and next section visible`, firstScreen.singleTitle && /ChristmasNorthwest/.test(firstScreen.title) && firstScreen.ctaVisible && firstScreen.nextSectionVisible && firstScreen.imageLoaded && !firstScreen.overflow);
    await page.screenshot({ path: `${output}/hero-${width}.png` });
    for (const section of ["#portfolio", ".home-included", "#pricing", ".home-team", "#quote", "footer"]) {
      await page.$eval(section, element => element.scrollIntoView());
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    }
    await page.waitForFunction(() => [...document.querySelectorAll("main img")].every(img => img.complete && img.naturalWidth > 0));
    const details = await page.evaluate(() => {
      const prices = [...document.querySelectorAll(".home-price")].map(p => p.textContent);
      const outside = [...document.querySelectorAll("main h1, main h2, main h3, main p, main button, main a, footer a")].filter(element => {
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.left < -1 || rect.right > innerWidth + 1 || element.scrollWidth > element.clientWidth + 2);
      }).map(element => element.textContent);
      const buttons = ['button-header-quote', 'button-hero-cta', 'button-cta-quote'].map(id => getComputedStyle(document.querySelector(`[data-testid="${id}"]`)).backgroundColor);
      return { prices, outside, buttons };
    });
    check(`${width}: prices preserved, text fits, quote colors consistent`, JSON.stringify(details.prices) === JSON.stringify(["Starting at $800", "$1,000–$2,000", "$2,500–$3,500", "$4,000+"]) && !details.outside.length && new Set(details.buttons).size === 1);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `${output}/home-${width}.png`, fullPage: true });

    if (width < 1024) {
      await page.click('[data-testid="button-mobile-menu"]');
      await page.waitForSelector('[role="dialog"]');
      check(`${width}: menu opens and traps focus`, await page.evaluate(() => document.body.style.overflow === "hidden" && document.querySelector('[role="dialog"]').contains(document.activeElement)));
      await page.keyboard.press("Escape");
      await page.waitForFunction(() => !document.querySelector('[role="dialog"]'));
      check(`${width}: menu closes and restores focus`, await page.evaluate(() => document.activeElement.dataset.testid === "button-mobile-menu" && document.body.style.overflow !== "hidden"));
      if (width < 768) {
        await page.evaluate(() => scrollTo(0, 400));
        await page.waitForSelector('[data-testid="button-sticky-quote-mobile"]', { visible: true });
        check(`${width}: sticky quote remains accessible`, await page.$eval('[data-testid="button-sticky-quote-mobile"]', element => element.getBoundingClientRect().bottom <= innerHeight));
        await page.evaluate(() => scrollTo(0, 0));
      }
    }

    await page.click('[data-testid="button-hero-cta"]');
    await page.waitForSelector('[data-testid="contact-submit"]');
    check(`${width}: hero opens the existing compact form`, new URL(page.url()).pathname === "/contact" && await page.$('[data-testid="contact-full-name"]'));
    await page.click('[data-testid="contact-submit"]');
    await page.waitForSelector('[data-testid="contact-full-name"][aria-invalid="true"]');
    await page.waitForFunction(() => document.activeElement.id === "contact-fullName");
    check(`${width}: form validation remains active`, await page.evaluate(() => document.activeElement.id === "contact-fullName"));
    check(`${width}: no JavaScript errors`, errors.length === 0);
    await page.close();
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  for (const [id, path, target] of [
    ["link-hero-gallery", "/gallery", '[data-testid="button-filter-warm-white"]'],
    ["button-view-gallery", "/gallery", '[data-testid="button-filter-warm-white"]'],
    ["link-home-pricing", "/investment-guide", "h1"],
    ["link-home-team", "/about", '[data-testid="installer-ryder"]'],
    ["button-cta-quote", "/contact", '[data-testid="contact-submit"]'],
    ["button-footer-quote", "/contact", '[data-testid="contact-submit"]'],
  ]) {
    await page.goto(base.href, { waitUntil: "networkidle0" });
    await page.locator(`[data-testid="${id}"]`).click();
    await page.waitForSelector(target);
    check(`${id}: reaches ${path}`, new URL(page.url()).pathname === path);
  }
  await page.close();

  for (const width of [390, 1440]) {
    for (const path of ["/services", "/investment-guide", "/product-guide"]) {
      const direct = await browser.newPage();
      const errors = [];
      direct.on("pageerror", error => errors.push(error.message));
      await direct.setViewport({ width, height: 900 });
      await direct.goto(new URL(path, base).href, { waitUntil: "networkidle0" });
      await direct.waitForSelector("h1");
      const styles = await direct.evaluate(() => {
        const included = document.querySelector(".home-included");
        const quote = document.querySelector(".home-quote-section");
        return {
          included: !included || getComputedStyle(included).backgroundColor === "rgb(242, 246, 247)",
          quote: !quote || getComputedStyle(quote).backgroundColor === "rgb(242, 246, 247)",
          fits: document.documentElement.scrollWidth <= innerWidth,
        };
      });
      check(`${width}: ${path} loads shared styles directly`, styles.included && styles.quote && styles.fits && errors.length === 0);
      await direct.screenshot({ path: `${output}/${path.slice(1)}-${width}.png`, fullPage: true });
      await direct.close();
    }
  }
  console.log(`${passed} checks passed. No lead submissions sent.`);
} finally {
  await browser.close();
}
