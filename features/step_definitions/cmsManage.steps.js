const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const CmsManagementPage = require('../pageObjects/CmsManagementPage');

const BASE_URL = process.env.OPUS_BASE_URL || 'https://qa-contractorportal.birlaopus.com';
const QA_EMAIL = process.env.OPUS_EMAIL || 'prachi@adityabirla.com';
const QA_OTP = process.env.OPUS_OTP || '123456';

When('A user is logged into the portal', async ({ page }) => {
    await page.goto(BASE_URL);
    const loginPage = new LoginPage(page);
    await loginPage.login(QA_EMAIL, QA_OTP);
    await expect(page).toHaveURL(/\/dashboard(?:\/?$)/, { timeout: 60000 });
});

When('A user lands on the CMS management page', async ({ page }) => {
    const cms = new CmsManagementPage(page);
    await cms.navigateToCmsPages();
});

When('A user clicks on the view icon of the {string} on the cms page', async ({ page }, label) => {
    const cms = new CmsManagementPage(page);
    await cms.clickView(label);
});

Then('A user should be navigated to the appropriate {string} {string} on the cms page', async ({ page }, _label, partialUrl) => {
    await expect(page).toHaveURL(new RegExp(`${partialUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:/?$)`));
});

When('A user clicks on the edit icon of the {string} on the cms page', async ({ page }, label) => {
    const cms = new CmsManagementPage(page);
    await cms.clickEdit(label);
});

When('A user update data of particular {string} cms page and clicks on submit button', async ({ page }, label) => {
    const cms = new CmsManagementPage(page);
    const timestamp = `Automated update for ${label} ${new Date().toISOString()}`;
    await cms.appendToEditor(timestamp);
    await cms.submitEdit();
});

Then('A user should be navigated to the cms management page', async ({ page }) => {
    await expect(page).toHaveURL(new RegExp(`/cms-pages(?:/?$)`));
});


