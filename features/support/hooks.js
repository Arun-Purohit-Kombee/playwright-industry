const { createBdd } = require('playwright-bdd');
const { Before, After, BeforeAll, AfterAll } = createBdd();
const { chromium } = require('@playwright/test');

// Configure timeout through playwright.config.js instead
// Previous cucumber timeout was 120s

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        args: ['--start-maximized']
    });
});

AfterAll(async () => {
    await global.browser.close();
});

Before(async ({ context }) => {
    // Context is automatically provided by playwright-bdd
    await context.setViewportSize({ width: 0, height: 0 }); // Maximized
});

After(async ({ page, context }) => {
    await page?.close();
    await context?.close();
});