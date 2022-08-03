import { chromium } from "playwright";

describe("Launch Browser", () => {
  // run
  test("Open Letcode", async () => {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://Letcode.in");
    await browser.close();
  });
});
