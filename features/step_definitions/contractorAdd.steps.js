const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const ContractorPage = require('../pageObjects/ContractorPage');

Given('I am logged in to Birla Opus portal', async function() {
    const loginPage = new LoginPage(this.page);
    await this.page.goto('https://qa-contractorportal.birlaopus.com/');
    await loginPage.login('prachi@adityabirla.com', '123456');
    await expect(this.page).toHaveURL(/.*\/dashboard/);
});

When('I navigate to contractors section', async function() {
    const contractorPage = new ContractorPage(this.page);
    await contractorPage.goToContractors();
});

When('I click on create new contractor', async function() {
    const contractorPage = new ContractorPage(this.page);
    await contractorPage.openCreateForm();
});

When('I choose contractor type {string}', async function(type) {
    const contractorPage = new ContractorPage(this.page);
    await contractorPage.chooseContractorType(type);
});

When('I fill in the contractor details:', async function(dataTable) {
    const contractorPage = new ContractorPage(this.page);
    const details = {};
    dataTable.rows().forEach(([field, value]) => {
        switch(field.trim()) {
            case 'First Name': details.firstName = value; break;
            case 'Last Name': details.lastName = value; break;
            case 'Mobile No': details.mobile = value; break;
            case 'Email': details.email = value; break;
        }
    });
    await contractorPage.fillBasicDetails(details);
});

When('I fill in institutional details:', async function(dataTable) {
    const contractorPage = new ContractorPage(this.page);
    const inst = {};
    dataTable.rows().forEach(([field, value]) => {
        switch(field.trim()) {
            case 'Organization Name': inst.organizationName = value; break;
            case 'Organization Type': inst.organizationType = value; break;
        }
    });
    await contractorPage.fillInstitutionalDetails(inst);
});

When('I select work location:', async function(dataTable) {
    const contractorPage = new ContractorPage(this.page);
    const location = {};
    dataTable.rows().forEach(([field, value]) => {
        switch(field.trim()) {
            case 'State': location.state = value; break;
            case 'Area': location.area = value; break;
            case 'District': location.district = value; break;
            case 'Pincode': location.pincode = value; break;
            case 'Territory': location.territory = value; break;
        }
    });
    await contractorPage.selectLocation(location);
});

When('I submit the form and confirm', async function() {
    const contractorPage = new ContractorPage(this.page);
    await contractorPage.submitForm();
    await contractorPage.confirmDetails();
});

Then('I should see a success message', async function() {
    const contractorPage = new ContractorPage(this.page);
    await contractorPage.isSuccessVisible();
});

Then('the contractor should be listed in the contractors grid', async function() {
    // crude verification: search by mobile number used in the feature
    await this.page.waitForSelector('table');
    const cell = await this.page.getByRole('cell', { name: '9999999998' });
    await expect(cell).toBeVisible();
});
