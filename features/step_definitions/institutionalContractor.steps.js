const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const InstitutionalContractorPage = require('../pageObjects/InstitutionalContractorPage');

Given('I navigate to the Birla Opus QA contractor portal', async function () {
    await this.page.goto('https://qa-contractorportal.birlaopus.com/');
});

When('I login with email {string} and otp {string}', async function (email, otp) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(email, otp);
});

Then('I should see the Institutional Contractors option on the dashboard', async function () {
    await expect(this.page).toHaveURL(/.*dashboard/);
    await expect(this.page.getByRole('link', { name: 'Institutional Contractors' })).toBeVisible();
});

Given('I am logged in as institutional contractor admin', async function () {
    await this.page.goto('https://qa-contractorportal.birlaopus.com/');
    const loginPage = new LoginPage(this.page);
    await loginPage.login('prachi@adityabirla.com', '123456');
    await expect(this.page).toHaveURL(/dashboard/);
});

When('I create a new institutional contractor profile with valid details', async function () {
    const icPage = new InstitutionalContractorPage(this.page);
    await icPage.openCreateForm();
    await icPage.fillProfileDetails({
        firstName: 'Prachi',
        lastName: 'Sharma',
        mobile: '9990012345',
        email: 'prachi.ic+e2e@adityabirla.com',
        subType: 'Painting Contractor (IC1)',
        birthdayLabel: 'September 10, 2007',
        territory: 'PP-0020 (Painter Automation QA)'
    });
    await icPage.skipToFinish();
});

Then('I should be redirected to Institutional Contractors list page', async function () {
    await expect(this.page).toHaveURL(/\/institutional-contractors$/);
    await expect(this.page.getByRole('heading', { name: 'User Management' })).toBeVisible();
});


