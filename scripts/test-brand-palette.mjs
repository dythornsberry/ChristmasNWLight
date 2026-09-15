import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const base = new URL(process.env.PREVIEW_URL || "http://127.0.0.1:8085");
assert(["localhost", "127.0.0.1"].includes(base.hostname), "Local preview only");
const output = "/private/tmp/christmasnw-brand-qa";
await mkdir(output, { recursive: true });
const browser = await puppeteer.launch({ headless: true, timeout: 20000 });
const paths = ["/", "/gallery", "/investment-guide", "/about", "/contact", "/services", "/product-guide", "/faq", "/testimonials", "/service-areas", "/seattle"];
let checks = 0;
let red;
function contrast(a, b) {
  const luminance = (rgb) => rgb.match(/[\d.]+/g).slice(0, 3).map(Number).map(v => {
    const c = v / 255;
    return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
  }).reduce((sum, c, i) => sum + c * [.2126, .7152, .0722][i], 0);
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + .05) / (values[1] + .05);
}

try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.setRequestInterception(true);
    page.on("request", request => {
      const url = new URL(request.url());
      if (url.origin !== base.origin || url.pathname.startsWith("/api/") || request.method() !== "GET") return request.abort();
      return request.continue();
    });
    for (const path of paths) {
      await page.goto(new URL(path, base).href, { waitUntil: "domcontentloaded" });
      await page.waitForSelector("footer.brand-footer");
      await page.waitForFunction(() => document.querySelector('[data-testid="img-logo"]')?.naturalWidth > 0);
      const styles = await page.evaluate(() => {
        const style = element => {
          const css = getComputedStyle(element);
          return { bg: css.backgroundColor, color: css.color, image: css.backgroundImage };
        };
        const footer = document.querySelector("footer");
        const footerLink = footer.querySelector('a[href="/services"]');
        const button = document.querySelector('[data-testid="button-header-quote"]');
        return {
          footer: style(footer), banner: style(document.querySelector('[data-testid="season-banner"]')),
          footerLink: style(footerLink), button: style(button),
          footerButton: style(document.querySelector('[data-testid="button-footer-quote"]')),
          callouts: [...document.querySelectorAll('.brand-cta, .home-quote-section')].map(element => ({
            ...style(element), heading: style(element.querySelector('h2')), paragraph: style(element.querySelector('p')),
            quote: style(element.querySelector('button')),
          })),
          clipped: [...footer.querySelectorAll('a, p, li')].filter(element => element.scrollWidth > element.clientWidth + 2).map(e => e.textContent),
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          prices: [...document.querySelectorAll('.home-price')].map(element => element.textContent),
        };
      });
      red ??= styles.button.bg;
      assert.equal(styles.footer.bg, "rgb(8, 67, 94)", `${path}: wrap blue footer`);
      assert.equal(styles.banner.bg, styles.footer.bg, `${path}: shared blue`);
      assert.equal(styles.button.bg, red, `${path}: header quote remains red`);
      assert.equal(styles.footerButton.bg, red, `${path}: footer quote remains red`);
      assert(contrast(styles.footerLink.color, styles.footer.bg) >= 4.5, `${path}: footer link contrast`);
      assert(contrast(styles.button.color, red) >= 4.5, `${path}: button contrast`);
      assert.equal(styles.overflow, false, `${path}: horizontal overflow`);
      assert.deepEqual(styles.clipped, [], `${path}: footer text fits`);
      for (const callout of styles.callouts) {
        assert.equal(callout.image, "none", `${path}: no gradient callout`);
        assert.equal(callout.bg, "rgb(242, 246, 247)", `${path}: shared pale background`);
        assert.equal(callout.quote.bg, red, `${path}: callout quote remains red`);
        assert(contrast(callout.heading.color, callout.bg) >= 4.5, `${path}: heading contrast`);
        assert(contrast(callout.paragraph.color, callout.bg) >= 4.5, `${path}: paragraph contrast`);
      }
      if (path === "/") {
        assert.deepEqual(styles.prices, ["Starting at $800", "$1,000–$2,000", "$2,500–$3,500", "$4,000+"]);
        await page.screenshot({ path: `${output}/hero-${width}.png` });
      }
      await page.$eval("footer", element => element.scrollIntoView());
      await page.screenshot({ path: `${output}/${path.replaceAll('/', '') || 'home'}-footer-${width}.png` });
      const footerLink = await page.$('footer a[href="/services"]');
      await footerLink.hover();
      const hoverColor = await footerLink.evaluate(element => getComputedStyle(element).color);
      assert(contrast(hoverColor, styles.footer.bg) >= 4.5, `${path}: footer hover contrast`);
      await footerLink.focus();
      const focus = await footerLink.evaluate(element => ({ width: getComputedStyle(element).outlineWidth, color: getComputedStyle(element).outlineColor }));
      assert.equal(focus.width, "2px", `${path}: visible focus outline`);
      assert(contrast(focus.color, styles.footer.bg) >= 3, `${path}: focus contrast`);
      if (width === 390 && path === "/gallery") {
        await page.evaluate(() => scrollTo(0, 0));
        await page.click('[data-testid="button-mobile-menu"]');
        await page.waitForSelector('[role="dialog"]');
        assert(await page.$('[data-testid="mobile-nav-gallery"][aria-current="page"]'));
        await page.screenshot({ path: `${output}/mobile-menu.png` });
        await page.keyboard.press("Escape");
      }
      if (["/", "/about", "/investment-guide", "/contact"].includes(path)) {
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 700) {
            scrollTo(0, y);
            await new Promise(resolve => requestAnimationFrame(resolve));
          }
          scrollTo(0, 0);
        });
        await page.screenshot({ path: `${output}/${path.replaceAll('/', '') || 'home'}-${width}.png`, fullPage: true });
      }
      console.log(`PASS ${++checks}: ${path} at ${width}px, palette, buttons, contrast, focus and layout`);
    }
    assert.deepEqual(errors, [], `No runtime errors at ${width}px`);
    await page.close();
  }
  console.log(`PASS: ${checks} page/viewport checks. No real lead requests sent. Screenshots: ${output}`);
} finally {
  await browser.close();
}
