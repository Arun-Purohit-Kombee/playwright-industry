import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage.js';
import ContractorPage from '../pageObjects/ContractorPage.js';

Given('I am logged in to Birla Opus portal', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://qa-contractorportal.birlaopus.com/');
    await loginPage.login('prachi@adityabirla.com', '123456');
    await expect(page).toHaveURL(/.*\/dashboard/);
});

When('I navigate to contractors section', async ({ page }) => {
    const contractorPage = new ContractorPage(page);
    await contractorPage.goToContractors();
});

When('I click on create new contractor', async ({ page }) => {
    const contractorPage = new ContractorPage(page);
    await contractorPage.openCreateForm();
});

When('I choose contractor type {string}', async ({ page }, type) => {
    const contractorPage = new ContractorPage(page);
    await contractorPage.chooseContractorType(type);
});

When('I fill in the contractor details:', async ({ page }, dataTable) => {
    const contractorPage = new ContractorPage(page);
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

When('I fill in institutional details:', async ({ page }, dataTable) => {
    const contractorPage = new ContractorPage(page);
    const inst = {};
    dataTable.rows().forEach(([field, value]) => {
        switch(field.trim()) {
            case 'Organization Name': inst.organizationName = value; break;
            case 'Organization Type': inst.organizationType = value; break;
        }
    });
    await contractorPage.fillInstitutionalDetails(inst);
});

When('I select work location:', async ({ page }, dataTable) => {
    const contractorPage = new ContractorPage(page);
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

When('I submit the form and confirm', async ({ page }) => {
    const contractorPage = new ContractorPage(page);
    await contractorPage.submitForm();
    await contractorPage.confirmDetails();
});

// Then('I should see a success message', async function() {
//     const contractorPage = new ContractorPage(this.page);
//     await contractorPage.isSuccessVisible();
// });

Then('the contractor should be listed in the contractors grid', async ({ page }) => {
    // crude verification: search by mobile number used in the feature
    await page.waitForSelector('table');
    const cell = await page.getByRole('cell', { name: '9999999998' });
    await expect(cell).toBeVisible();
});

When('I go to Contractors list', async ({ page }) => {
    const contractorPage = new ContractorPage(page);
    await contractorPage.openList();
});

When('I filter Registration Date from {string} to {string}', async ({ page }, start, end) => {
    const contractorPage = new ContractorPage(page);
    await contractorPage.setRegistrationDateRange(start, end);
    await contractorPage.submitFilters();
});

Then('I should see all contractor rows with Registration Date within {string} and {string}', async ({ page }, start, end) => {
    const contractorPage = new ContractorPage(page);
    const dates = await contractorPage.getRegistrationDatesFromTable();

    const startDate = new Date(start);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(end);
    endDate.setHours(23, 59, 59, 999);

    // Ensure we have at least one result
    expect(dates.length).toBeGreaterThan(0);

    for (const d of dates) {
        expect(d >= startDate && d <= endDate).toBeTruthy();
    }
});