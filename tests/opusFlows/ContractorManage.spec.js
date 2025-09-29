// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Contractor Management - Create (via MCP verified flow)', () => {
    test('should create a new contractor profile and show success toast', async ({ page }) => {
        test.setTimeout(120000);

        
        await page.goto('https://qa-contractorportal.birlaopus.com/');
        await page.getByTestId('email').fill('prachi@adityabirla.com');
        await page.getByTestId('login_button').click();
        
        await page.getByTestId('verify_otp_code').fill('123456');
        await page.getByTestId('verifyOtp_button').click();
        await page.waitForURL(/dashboard/);

        
        await page.getByTestId('dashboard_menu_contractors').click();
        await page.waitForURL(/\/contractors$/);

        
        await page.getByTestId('add_new').click();
        await page.waitForURL(/\/contractors\/create$/);

        
        const unique = Math.floor(Math.random() * 1_000_000);

        
        await page.getByTestId('first_name').fill('ContractorQA');
        await page.getByTestId('last_name').fill('Automation');
        await page.getByTestId('mobile_no').fill(`98877${(10000 + unique).toString().slice(0, 5)}`);
        await page.getByTestId('email').fill(`contractor.qa.auto${unique}@example.com`);
        await page.getByTestId('type_of_user_contractor').click();

        
        const subtypeCombo = page.getByRole('combobox').filter({ has: page.getByRole('searchbox', { name: 'Search' }) }).first();
        
        await subtypeCombo.click().catch(() => { });
        const subtypeOption = page.getByRole('option', { name: 'Opus Partner (CS1)' }).first();
        if (await subtypeOption.isVisible().catch(() => false)) {
            await subtypeOption.click();
        }
        await page.waitForTimeout(2000);

        
        async function pickOption(comboboxName, optionName) {
            const combo = page.getByRole('combobox', { name: comboboxName });
            await combo.click();
            const search = page.getByRole('searchbox', { name: 'Search' });
            if (await search.isVisible().catch(() => false)) {
                await search.fill(optionName);
            }
            const option = page.getByRole('option', { name: optionName }).first();
            await option.waitFor({ state: 'visible', timeout: 10000 });
            await option.click();
        }

        
        await pickOption('Select State', 'Delhi');
        await page.waitForTimeout(500);
        await pickOption('Select Area', 'Delhi North');
        await page.waitForTimeout(500);
        await pickOption('Select District', 'North East Delhi');
        await page.waitForTimeout(500);
        await pickOption('Select Pincode', '110090');
        await page.waitForTimeout(500);
        // Territory: prefer Karawal Nagar, else first visible
        const territoryCombo = page.getByRole('combobox', { name: 'Select Territory' });
        await territoryCombo.click();
        const knownTerritory = page.getByRole('option', { name: /Karawal Nagar/i }).first();
        if (await knownTerritory.isVisible().catch(() => false)) {
            await knownTerritory.click();
        } else {
            const anyTerritory = page.getByRole('option').first();
            await anyTerritory.waitFor({ state: 'visible', timeout: 10000 });
            await anyTerritory.click();
        }

        
        await page.getByTestId('submit_button').click();

        await page.waitForTimeout(3000);

        const confirmBtn = page.getByTestId('confirm_button');
        if (await confirmBtn.isVisible().catch(() => false)) {
            await confirmBtn.click();
        }

        
        const toast = page.getByText('The profile details have been created successfully', { exact: false });
        await toast.waitFor({ state: 'visible', timeout: 15000 });
        await expect(toast).toBeVisible();
    });
});


test.describe('Painter Deletion', () => {
  test('should delete a painter', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://qa-contractorportal.birlaopus.com/');
    await page.getByTestId('email').fill('prachi@adityabirla.com');
    await page.getByTestId('login_button').click();
    await page.getByTestId('verify_otp_code').fill('123456');
    await page.getByTestId('verifyOtp_button').click();
    await page.waitForURL(/dashboard/);

    await page.getByTestId('dashboard_menu_contractors').click();
    await page.waitForURL(/\/contractors$/);

    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'Pending' }).click();
    await page.getByTestId('submit_button').click();

    await page.waitForTimeout(3000);
    const firstRow = page.locator('tbody tr').first();
    const opusId = (await firstRow.locator('td').nth(1).textContent())?.trim();
    console.log(`Opus ID: ${opusId}`);

    if (!opusId) {
      throw new Error('Opus ID not found');
    }

    await firstRow.getByRole('button', { name: '' }).click();

    await page.locator('div.modal-content:has-text("Are you sure you want to delete this user?")').getByTestId('remark').fill('test');
    await page.getByTestId('yes_button').click();

    await page.waitForURL(/\/delete-users$/);

    await page.getByTestId('table_column_filter_opus_pc_id').fill(opusId);
    await page.waitForTimeout(2000);

    const deletedRow = page.locator(`tbody tr:has-text("${opusId}")`);
    await expect(deletedRow).toBeVisible();
  });
});


