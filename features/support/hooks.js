const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(120 * 1000);
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        args: ['--start-maximized']
    });
});

AfterAll(async function () {
    await global.browser.close();
});

Before(async function () {
    this.context = await global.browser.newContext({
        viewport: null,
    });
    this.page = await this.context.newPage();
});

After(async function () {
    await this.page.close();
    await this.context.close();
});