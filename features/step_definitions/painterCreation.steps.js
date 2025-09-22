const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const PainterPage = require('../pageObjects/PainterPage');

// onl

Given('I navigate to painters section', async function() {
    await this.page.getByTestId('dashboard_menu_painters').click();
    await expect(this.page).toHaveURL(/.*\/painters/);
});

When('I click on create new painter button', async function() {
    const painterPage = new PainterPage(this.page);
    await painterPage.createButton.click();
    await expect(this.page).toHaveURL(/.*\/painters\/create/);
});

When('I fill in the painter details:', async function(dataTable) {
    const painterPage = new PainterPage(this.page);
    const details = {};
    dataTable.rows().forEach(([field, value]) => {
        switch(field) {
            case 'First Name':
                details.firstName = value;
                break;
            case 'Last Name':
                details.lastName = value;
                break;
            case 'Mobile No':
                details.mobile = value;
                break;
            case 'Email':
                details.email = value;
                break;
            case 'Contractor Mobile':
                details.contractorMobile = value;
                break;
            case 'Contractor First':
                details.contractorFirst = value;
                break;
            case 'Contractor Last':
                details.contractorLast = value;
                break;
        }
    });
    await painterPage.fillBasicDetails(details);
});

When('I select work location details:', async function(dataTable) {
    const painterPage = new PainterPage(this.page);
    const location = {};
    dataTable.rows().forEach(([field, value]) => {
        switch(field) {
            case 'State':
                location.state = value;
                break;
            case 'Area':
                location.area = value;
                break;
            case 'District':
                location.district = value;
                break;
            case 'Pincode':
                location.pincode = value;
                break;
            case 'Territory':
                location.territory = value;
                break;
        }
    });
    await painterPage.selectLocation(location);
});

When('I click the submit button', async function() {
    const painterPage = new PainterPage(this.page);
    await painterPage.submitForm();
});

When('I confirm the painter details', async function() {
    const painterPage = new PainterPage(this.page);
    await painterPage.confirmDetails();
});

Then('I should see a success message', async function() {
    await expect(this.page.getByText('The profile details have been created successfully')).toBeVisible();
});

// Then('the new painter should be listed in the painters grid', async function() {
//     await this.page.waitForSelector('table');
//     const mobileCell = await this.page.getByRole('cell', { name: '9999958455' });
//     await expect(mobileCell).toBeVisible();
// });