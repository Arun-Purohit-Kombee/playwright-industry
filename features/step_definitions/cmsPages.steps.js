const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const CmsManagementPage = require('../pageObjects/CmsManagementPage');

const BASE_URL = process.env.OPUS_BASE_URL || 'https://qa-contractorportal.birlaopus.com';
const QA_EMAIL = process.env.OPUS_EMAIL || 'prachi@adityabirla.com';
const QA_OTP = process.env.OPUS_OTP || '123456';

When('A user is logged into the portal', async function () {
    const { page } = this;
    await page.goto(BASE_URL);
    const loginPage = new LoginPage(page);
    await loginPage.login(QA_EMAIL, QA_OTP);
    await page.waitForURL(/\/dashboard(?:\/?$)/);
});

When('A user lands on the CMS management page', async function () {
    const { page } = this;
    this.cms = new CmsManagementPage(page);
    await this.cms.navigateToCmsPages();
});

When('A user clicks on the view icon of the {string} on the cms page', async function (label) {
    await this.cms.clickView(label);
});

Then('A user should be navigated to the appropriate {string} {string} on the cms page', async function (_label, partialUrl) {
    const { page } = this;
    await expect(page).toHaveURL(new RegExp(`${partialUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:/?$)`));
});

When('A user clicks on the edit icon of the {string} on the cms page', async function (label) {
    await this.cms.clickEdit(label);
});

When('A user update data of particular {string} cms page and clicks on submit button', async function (label) {
    const timestamp = `Automated update for ${label} ${new Date().toISOString()}`;
    await this.cms.appendToEditor(timestamp);
    await this.cms.submitEdit();
});

Then('A user should be navigated to the cms management page', async function () {
    const { page } = this;
    await expect(page).toHaveURL(new RegExp(`/cms-pages(?:/?$)`));
});


