const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const PainterPage = require('../pageObjects/PainterPage');


Given('I navigate to painters section', async ({ page }) => {
    await page.getByTestId('dashboard_menu_painters').click();
    await expect(page).toHaveURL(/.*\/painters/);
});

When('I click on create new painter button', async ({ page }) => {
    const painterPage = new PainterPage(page);
    await painterPage.createButton.click();
    await expect(page).toHaveURL(/.*\/painters\/create/);
});

When('I fill in the painter details:', async ({ page }, dataTable) => {
    const painterPage = new PainterPage(page);
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

When('I select work location details:', async ({ page }, dataTable) => {
    const painterPage = new PainterPage(page);
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

When('I click the submit button', async ({ page }) => {
    const painterPage = new PainterPage(page);
    await painterPage.submitForm();
});

When('I confirm the painter details', async ({ page }) => {
    const painterPage = new PainterPage(page);
    await painterPage.confirmDetails();
});

Then('I should see a success message', async ({ page }) => {
    await expect(page.getByText('The profile details have been created successfully')).toBeVisible();
});

// Then('the new painter should be listed in the painters grid', async function() {
//     await page.waitForSelector('table');
//     const mobileCell = await page.getByRole('cell', { name: '9999958455' });
//     await expect(mobileCell).toBeVisible();
// });