const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const InstMCPPage = require('../pageObjects/InstitutionalContractorMCPPage');

Given('I am logged in as an admin user', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
    await this.loginPage.loginAsAdmin();
});

When('I navigate to the institutional contractors page', async function () {
    this.instPage = new InstMCPPage(this.page);
    await this.instPage.gotoFromDashboard();
});

When('I click the Add New button', async function () {
    await this.instPage.clickAddNew();
});

When('I fill in the institutional contractor form with:', async function (dataTable) {
    const row = dataTable.hashes()[0];
    // map keys to values expected by the page object
    const details = {
        firstName: row['First Name'],
        lastName: row['Last Name'],
        mobile: row['Mobile No'],
        email: row['Email']
    };
    this._instDetails = details;
    await this.instPage.fillPersonalDetails(details);
});

When('I choose institutional contractor type', async function () {
    await this.instPage.chooseInstitutionalType();
});

// When('I select work location:', async function (dataTable) {
//     const loc = dataTable.hashes()[0];
//     await this.instPage.selectDropdowns(loc);
// });

When('I submit and confirm the form', async function () {
    await this.instPage.submitAndConfirm();
});

// Then('I should see a success message', async function () {
//     const text = await this.instPage.waitForSuccessToast();
//     expect(text).toContain('created successfully');
// });

Then('the new contractor should be visible in the list', async function () {
    const email = this._instDetails?.email || this._instDetails?.Email;
    const present = await this.instPage.isContractorListed(email);
    expect(present).toBeTruthy();
});
