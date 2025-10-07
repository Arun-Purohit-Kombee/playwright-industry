
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const InstitutionalContractorPage = require('../pageObjects/InstitutionalContractorPage');

Given('I am logged in as an admin user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginAsAdmin();
});

When('I navigate to the Institutional Contractors section', async ({ page }) => {
    const instPage = new InstitutionalContractorPage(page);
    await instPage.goto();
});

When('I click the {string} button', async ({ page }, buttonText) => {
    const instPage = new InstitutionalContractorPage(page);
    await instPage.clickButton(buttonText);
});

When('I fill in the institutional contractor details:', async ({ page }, dataTable) => {
    const instPage = new InstitutionalContractorPage(page);
    const details = dataTable.hashes()[0];
    await instPage.fillContractorDetails(details);
});

When('I select the following work location:', async ({ page }, dataTable) => {
    const instPage = new InstitutionalContractorPage(page);
    const location = dataTable.hashes()[0];
    await instPage.selectWorkLocation(location);
});

When('I submit the contractor form', async ({ page }) => {
    const instPage = new InstitutionalContractorPage(page);
    await instPage.submitForm();
});

Then('I should see a confirmation that the profile details have been created successfully', async ({ page }) => {
    const instPage = new InstitutionalContractorPage(page);
    await expect(instPage.getSuccessMessage()).resolves.toContain('created successfully');
});
