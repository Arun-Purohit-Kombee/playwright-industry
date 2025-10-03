// @ts-check
import { test, expect } from '@playwright/test'

test.describe('Painter Management', () => {
  test('Create a new Painter profile', async ({ page, context }) => {

    const start = Date.now()

    await page.goto('https://qa-contractorportal.birlaopus.com/')

    await page.getByTestId('email').fill('prachi@adityabirla.com')
    await page.getByTestId('login_button').click()

    await page.getByTestId('verify_otp_code').fill('123456')

    await Promise.all([
      page.getByTestId('verifyOtp_button').click(),
      page.waitForURL(/\/dashboard(?:\/|$)/, { timeout: 30000 }),
    ])
    await expect(page.getByTestId('dashboard_menu_painters')).toBeVisible()



    await page.getByTestId('dashboard_menu_painters').click()
    await page.waitForURL(/\/painters$/)


    await page.getByTestId('add_new').click()
    await page.waitForURL(/\/painters\/create$/)


    const unique = Math.floor(Math.random() * 1_000_000)
    await page.getByTestId('first_name').fill('PrachiQA')
    await page.getByTestId('last_name').fill('Automation')
    await page.getByTestId('mobile_no').fill(`99911${(10000 + unique).toString().slice(0, 5)}`)
    await page.getByTestId('email').fill(`prachi.qa.auto+${unique}@example.com`)
    await page.getByTestId('type_of_user_painter').click()


    await page.getByTestId('contractor_mobile_no').fill('9876543210')
    await page.getByTestId('contractor_name').fill('ABG')
    await page.getByTestId('contractor_last_name').fill('Contractor')


    async function pickOption(comboboxName, optionName) {
      const combo = page.getByRole('combobox', { name: comboboxName })
      await combo.click()

      const search = page.getByRole('searchbox', { name: 'Search' })
      if (await search.isVisible().catch(() => false)) {
        await search.fill(optionName)
      }
      const option = page.getByRole('option', { name: optionName }).first()
      await option.waitFor({ state: 'visible', timeout: 10000 })
      await option.click()
    }

    await pickOption('Select State', 'Delhi')
    await page.waitForTimeout(3000)
    await pickOption('Select Area', 'Delhi North')
    await page.waitForTimeout(3000)
    await pickOption('Select District', 'North East Delhi')
    await page.waitForTimeout(3000)
    await pickOption('Select Pincode', '110090')
    await page.waitForTimeout(3000)

    await page.getByRole('combobox', { name: 'Select Territory' }).click()

    const anyOption = page.getByRole('option')
    await anyOption.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => null)
    const territoryKnown = page.getByRole('option', { name: /Karawal Nagar/i }).first()
    if (await territoryKnown.isVisible().catch(() => false)) {
      await territoryKnown.click()
    } else {
      await anyOption.first().click()
    }


    await page.getByTestId('submit_button').click()
    await page.waitForTimeout(3000)


    const confirmButton = page.getByTestId('confirm_button')
    if (await confirmButton.isVisible().catch(() => false)) {
      await confirmButton.click()
    }


    const toast = page.getByText('The profile details have been created successfully', { exact: false })
    await toast.waitFor({ state: 'visible', timeout: 15000 })
    await expect(toast).toBeVisible()


    const elapsedMs = Date.now() - start
    console.log(`Painter create elapsedMs=${elapsedMs}`)
  })

  test('Delete a painter', async ({ page }) => {
    test.setTimeout(200000)

    await page.goto('https://qa-contractorportal.birlaopus.com/')
    await page.getByTestId('email').fill('prachi@adityabirla.com')
    await page.getByTestId('login_button').click()
    await page.waitForTimeout(2000)
    await page.getByTestId('verify_otp_code').fill('123456')
    await page.getByTestId('verifyOtp_button').click()
    await page.waitForURL(/dashboard/)

    await page.getByTestId('dashboard_menu_painters').click()
    await page.waitForURL(/\/painters$/)

    await page.getByRole('combobox').nth(1).click()
    await page.getByRole('option', { name: 'Pending' }).click()
    await page.getByTestId('submit_button').click()

    await page.waitForTimeout(3000)
    const firstRow = page.locator('tbody tr').first()
    const opusId = (await firstRow.locator('td').nth(1).textContent())?.trim()
    console.log(`Opus ID: ${opusId}`)

    if (!opusId) {
      throw new Error('Opus ID not found')
    }

    await firstRow.getByRole('button', { name: '' }).click()

    await page.locator('div.modal-content:has-text("Are you sure you want to delete this user?")').getByTestId('remark').fill('test')
    await page.getByTestId('yes_button').click()

    await page.waitForURL(/\/delete-users$/)

    await page.getByTestId('table_column_filter_opus_pc_id').fill(opusId)
    await page.waitForTimeout(2000)

    const deletedRow = page.locator(`tbody tr:has-text("${opusId}")`)
    await expect(deletedRow).toBeVisible()
  })
})




