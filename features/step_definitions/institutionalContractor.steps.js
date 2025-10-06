
// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
// const LoginPage = require('../pageObjects/LoginPage');
// const InstitutionalContractorPage = require('../pageObjects/InstitutionalContractorPage');

// Given('I am logged in as an admin user', async function () {
//     this.loginPage = new LoginPage(this.page);
//     await this.loginPage.goto();
//     await this.loginPage.loginAsAdmin();
// });

// When('I navigate to the Institutional Contractors section', async function () {
//     this.instPage = new InstitutionalContractorPage(this.page);
//     await this.instPage.goto();
// });

// When('I click the {string} button', async function (buttonText) {
//     await this.instPage.clickButton(buttonText);
// });

// When('I fill in the institutional contractor details:', async function (dataTable) {
//     const details = dataTable.hashes()[0];
//     await this.instPage.fillContractorDetails(details);
// });

// When('I select the following work location:', async function (dataTable) {
//     const location = dataTable.hashes()[0];
//     await this.instPage.selectWorkLocation(location);
// });

// When('I submit the contractor form', async function () {
//     await this.instPage.submitForm();
// });

// Then('I should see a confirmation that the profile details have been created successfully', async function () {
//     await expect(this.instPage.getSuccessMessage()).resolves.toContain('created successfully');
// });


