const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const InstMCPPage = require('../pageObjects/InstitutionalContractorPage');

Given('I am logged in as an admin user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginAsAdmin();
});

When('I navigate to the institutional contractors page', async ({ page }) => {
    const instPage = new InstMCPPage(page);
    await instPage.gotoFromDashboard();
});

When('I click the Add New button', async ({ page }) => {
    const instPage = new InstMCPPage(page);
    await instPage.clickAddNew();
});

When('I fill in the institutional contractor form with:', async ({ page }, dataTable) => {
    const instPage = new InstMCPPage(page);
    const row = dataTable.hashes()[0];
    // map keys to values expected by the page object
    const details = {
        firstName: row['First Name'],
        lastName: row['Last Name'],
        mobile: row['Mobile No'],
        email: row['Email']
    };
    // Store details in testInfo for later use
    await page.evaluate((details) => {
        window.__testDetails = details;
    }, details);
    await instPage.fillPersonalDetails(details);
});

When('I choose institutional contractor type', async ({ page }) => {
    const instPage = new InstMCPPage(page);
    await instPage.chooseInstitutionalType();
});

// When('I select work location:', async function (dataTable) {
//     const loc = dataTable.hashes()[0];
//     await this.instPage.selectDropdowns(loc);
// });

When('I submit and confirm the form', async ({ page }) => {
    const instPage = new InstMCPPage(page);
    await instPage.submitAndConfirm();
});

// Then('I should see a success message', async function () {
//     const text = await this.instPage.waitForSuccessToast();
//     expect(text).toContain('created successfully');
// });

Then('the new contractor should be visible in the list', async ({ page }) => {
    const instPage = new InstMCPPage(page);
    const details = await page.evaluate(() => window.__testDetails);
    const email = details?.email || details?.Email;
    const present = await instPage.isContractorListed(email);
    expect(present).toBeTruthy();
});
