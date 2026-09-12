import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

// Local Vite preview only. All delivery is mocked and external traffic is blocked.
const base = new URL(process.env.PREVIEW_URL || "http://127.0.0.1:8083");
assert(["127.0.0.1", "localhost"].includes(base.hostname), "Use a local preview, never production");
const output = process.env.QA_OUTPUT || "/private/tmp/christmas-compact-form-qa";
await mkdir(output, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
let passes = 0;

async function fixture({ route = "/contact", width = 1440, maps = "missing", primary = 200, backup = 200, delay = 0 } = {}) {
  const page = await browser.newPage();
  const requests = [];
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewport({ width, height: 1000 });
  await page.setRequestInterception(true);
  page.on("request", async (request) => {
    const url = new URL(request.url());
    if (url.origin !== base.origin) return request.abort();
    if (url.pathname.startsWith("/api/")) {
      assert(["/api/submit-quote", "/api/backup-email"].includes(url.pathname));
      requests.push({ path: url.pathname, body: JSON.parse(request.postData()) });
      if (delay) await new Promise((resolve) => setTimeout(resolve, delay));
      return request.respond({ status: url.pathname === "/api/submit-quote" ? primary : backup, contentType: "application/json", body: "{}" });
    }
    if (url.pathname === "/src/lib/googleMaps.ts") {
      const body = maps === "missing"
        ? "export const hasGooglePlacesApiKey = () => false; export const loadPlacesLibrary = async () => { throw Error('missing key'); };"
        : maps === "failure"
          ? "export const hasGooglePlacesApiKey = () => true; export const loadPlacesLibrary = async () => { throw Error('unavailable'); };"
          : `export const hasGooglePlacesApiKey = () => true;
             export const loadPlacesLibrary = async () => {
               await new Promise(r => setTimeout(r, 200));
               return { Autocomplete: class {
                 constructor(input) { this.input = input; window.__places = this; }
                 addListener(_, callback) { this.callback = callback; }
                 getPlace() { return this.place; }
                 choose(address, zip) {
                   this.place = { formatted_address: address, address_components: [{long_name: zip, types: ['postal_code']}] };
                   this.input.value = address; this.callback();
                 }
               }};
             };`;
      return request.respond({ status: 200, contentType: "application/javascript", body });
    }
    return request.continue();
  });
  await page.goto(new URL(route, base).href, { waitUntil: "networkidle0" });
  const prefix = route === "/contact" ? "contact" : "city-kenmore";
  const selector = (suffix) => `[data-testid="${prefix}-${suffix}"]`;
  const fill = async (selector, value) => {
    await page.locator(selector).fill(value);
    if (!value) {
      // Puppeteer's empty fill can skip the input event; clear through the keyboard.
      await page.type(selector, "x");
      await page.keyboard.press("Backspace");
    }
  };
  const populate = async () => {
    await fill(selector("full-name"), "Preview Customer");
    await fill(selector("phone"), "4252150935");
    await fill(selector("email"), "preview-check@christmasnw.com");
    await fill(`#${prefix}-address`, "123 Main Street, Kenmore WA 98028");
    await page.click(`${selector("seasonal-confirm")} [role=checkbox]`);
  };
  return { page, requests, prefix, selector, fill, populate, errors };
}

async function run(name, options, test) {
  const f = await fixture(options);
  try {
    await test(f);
    assert.deepEqual(f.errors, []);
    console.log(`PASS ${++passes}: ${name}`);
  } catch (error) {
    await f.page.screenshot({ path: `${output}/failure.png`, fullPage: true });
    console.error(await f.page.evaluate(() => ({ inputs: [...document.querySelectorAll("input")].map(i => ({ id: i.id, value: i.value, invalid: i.getAttribute("aria-invalid") })), text: document.querySelector("form")?.textContent })));
    throw error;
  } finally { await f.page.close(); }
}

try {
  await run("all fields on one page; required errors focus first field", {}, async ({ page, requests, selector }) => {
    for (const suffix of ["full-name", "phone", "email", "submit"]) assert(await page.$(selector(suffix)));
    assert.equal(await page.$('[data-testid$="next-contact"]'), null);
    await page.click(selector("submit"));
    await page.waitForSelector('[aria-invalid="true"]');
    await page.waitForFunction(() => document.activeElement.id === "contact-fullName");
    assert.equal(await page.evaluate(() => document.activeElement.id), "contact-fullName");
    assert.equal(requests.length, 0);
  });

  await run("invalid phone, email, name and missing address block delivery", {}, async ({ page, requests, selector, fill, populate }) => {
    await populate();
    for (const [field, invalid, valid] of [[selector("phone"), "1111111111", "4252150935"], [selector("email"), "bad-email", "preview-check@christmasnw.com"], [selector("full-name"), "A".repeat(81), "Preview Customer"], ["#contact-address", "", "123 Main Street, Kenmore WA 98028"]]) {
      await fill(field, invalid);
      await page.click(selector("submit"));
      await page.waitForSelector(`${field}[aria-invalid="true"]`);
      assert.equal(requests.length, 0);
      await fill(field, valid);
    }
    await page.click(`${selector("seasonal-confirm")} [role=checkbox]`);
    await page.click(selector("submit"));
    await page.waitForSelector(`${selector("seasonal-confirm")} [aria-invalid="true"]`);
    assert.equal(requests.length, 0);
  });

  for (const width of [1440, 375]) {
    await run(`manual address and new lead payload at ${width}px`, { width }, async ({ page, requests, selector, populate }) => {
      await populate();
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.locator(selector("full-name")).scroll();
      await page.screenshot({ path: `${output}/contact-${width}.png`, fullPage: true });
      await page.click(selector("submit"));
      await page.waitForSelector(selector("success"));
      assert.equal(requests.length, 2);
      assert.deepEqual(requests[0].body, requests[1].body);
      assert.equal(requests[0].body.serviceType, "christmas-2026-new");
      assert.equal(requests[0].body.phoneE164, "+14252150935");
      assert.equal(requests[0].body.addressConfirmed, false);
      assert.equal(requests[0].body.address, "123 Main Street, Kenmore WA 98028");
      assert.equal(requests[0].body.seasonalConfirmed, true);
      assert.equal(requests[0].body.formLocation, "contact_page");
      await page.locator(selector("reset")).click();
      await page.waitForSelector(selector("full-name"));
      assert.equal(await page.$eval(selector("full-name"), i => i.value), "");
      assert.equal(await page.$eval("#contact-address", i => i.value), "");
    });
  }

  await run("returning customer toggle preserves inputs and sends correct service", {}, async ({ page, requests, selector, populate }) => {
    await populate();
    await page.click(selector("returning"));
    await page.click(selector("returning"));
    await page.click(selector("returning"));
    await page.click(selector("submit"));
    await page.waitForSelector(selector("success"));
    assert.equal(requests[0].body.serviceType, "christmas-2026-returning");
    assert.equal(requests[0].body.fullName, "Preview Customer");
  });

  await run("failed Google library falls back to manual entry", { maps: "failure" }, async ({ page, requests, selector, populate }) => {
    await populate();
    await page.click(selector("submit"));
    await page.waitForSelector(selector("success"));
    assert.equal(requests[0].body.addressConfirmed, false);
  });

  for (const edit of [false, true]) {
    await run(`Places selection${edit ? " then manual edit" : " and Enter key"}`, { maps: "mock" }, async ({ page, requests, selector, populate, fill }) => {
      await populate();
      await page.waitForFunction(() => window.__places);
      await page.evaluate(() => window.__places.choose("456 Test Avenue, Kenmore WA 98028", "98028"));
      await page.focus("#contact-address");
      await page.keyboard.press("Enter");
      assert.equal(requests.length, 0, "Enter in autocomplete must not submit");
      if (edit) await fill("#contact-address", "789 Updated Avenue, Seattle WA 98101");
      await page.click(selector("submit"));
      await page.waitForSelector(selector("success"));
      assert.equal(requests[0].body.addressConfirmed, !edit);
      assert.equal(requests[0].body.zipCode, edit ? "" : "98028");
    });
  }

  await run("rapid repeated submits dispatch one request per delivery endpoint", { delay: 800 }, async ({ page, requests, selector, populate }) => {
    await populate();
    await page.$eval("form", form => { form.requestSubmit(); form.requestSubmit(); form.requestSubmit(); });
    await page.waitForSelector(`${selector("submit")}[disabled]`);
    await page.waitForSelector(selector("success"));
    assert.equal(requests.length, 2);
  });

  await run("500/429 errors retain fields and permit retry", { primary: 500, backup: 429 }, async ({ page, requests, selector, populate }) => {
    await populate();
    await page.click(selector("submit"));
    await page.waitForFunction(() => document.body.textContent.includes("Submission Problem"));
    await page.waitForFunction(() => !document.querySelector('[data-testid="contact-submit"]').disabled);
    assert.equal(await page.$eval(selector("email"), i => i.value), "preview-check@christmasnw.com");
    await page.click(selector("submit"));
    await page.waitForFunction(() => !document.querySelector('[data-testid="contact-submit"]').disabled);
    assert.equal(requests.length, 4);
  });

  await run("backup delivery still succeeds if primary fails", { primary: 500 }, async ({ page, selector, populate }) => {
    await populate();
    await page.click(selector("submit"));
    await page.waitForSelector(selector("success"));
  });

  await run("honeypot makes no delivery requests", {}, async ({ page, requests, selector, populate }) => {
    await populate();
    await page.$eval("#contact-website", input => {
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(input, "spam.invalid");
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
    await page.click(selector("submit"));
    await page.waitForSelector(selector("success"));
    assert.equal(requests.length, 0);
  });

  await run("shared city form delivers its own location", { route: "/kenmore", width: 375 }, async ({ page, requests, selector, populate }) => {
    await populate();
    await page.click(selector("submit"));
    await page.waitForSelector(selector("success"));
    assert.equal(requests[0].body.formLocation, "city_kenmore");
  });

  for (const width of [1440, 375]) {
    await run(`Warm White badge and category filtering at ${width}px`, { route: "/gallery", width }, async ({ page }) => {
      const filter = '[data-testid="button-filter-warm-white"]';
      assert.match(await page.$eval(filter, e => e.textContent), /Most popular/);
      await page.click(filter);
      await page.waitForSelector(`${filter}[aria-pressed=true]`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.locator(filter).scroll();
      await page.screenshot({ path: `${output}/gallery-${width}.png` });
    });
  }
  console.log(`${passes} checks passed. Screenshots: ${output}. No live leads sent.`);
} finally { await browser.close(); }
