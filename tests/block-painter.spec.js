import { test, expect } from '@playwright/test'

test('Block first pending painter user', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto('https://qa-contractorportal.birlaopus.com')

  // Step 2: Enter email and proceed
  await page.getByRole('textbox', { name: 'Email' }).fill('sparkle.testpainter1@adityabirla.com')
  await page.getByRole('button', { name: /Next/ }).click()

  // Step 3: Enter OTP and verify
  await page.getByRole('textbox', { name: /Enter OTP/ }).fill('123456')
  await page.getByRole('button', { name: /Verify OTP/ }).click()

  // Step 4: Click on Painters card
  await page.getByRole('link', { name: /Painters/ }).click()
  // Wait for User Management heading to ensure page is loaded
  await page.getByRole('heading', { name: /User Management/ }).waitFor()

  // Step 5: Filter by status = pending
  await page.getByPlaceholder('Select Status').click()
  await page.getByRole('option', { name: 'Pending' }).click()
  await page.getByRole('button', { name: /Submit/ }).click()

  // Step 6: Block the first user in the list
  await page.getByRole('button', { name: '' }).first().click()
  // Wait for Block Account dialog to appear
  await page.getByRole('heading', { name: /Block Account/ }).waitFor()
  //await page.getByRole('textbox').fill('Blocking for test')
  await page.getByRole('dialog', { name: 'Block Account Remark * Block' }).getByTestId('remark').fill('Blocking for test')
  await page.getByRole('button', { name: 'Block' }).click()

  // Assert success message
  await expect(page.getByText('Updated successfully')).toBeVisible()
})
