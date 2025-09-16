const { test, expect } = require('@playwright/test')

test('End-to-end shopping flow with me', async ({ browser }) => {

  const context = await browser.newContext()
  const page = await context.newPage()


  await page.goto('https://rahulshettyacademy.com/client');

  const signOutButton = page.getByRole('button', { name: 'Sign Out' });
  //if (await signOutButton.isVisible()) {
  //  await signOutButton.click();
  // await page.waitForURL('**/auth/login');
  //} 

  await page.getByRole('textbox', { name: 'email@example.com' }).fill('arun.purohit@kombee.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Arun@123');
  await page.getByRole('button', { name: 'Login' }).click();


  //await page.waitForLoadState('networkidle')

  await page.locator(".card-body b").first().waitFor()
  const title = await page.locator('.card-body b').allTextContents()
  const products = page.locator('.card-body')
  console.log(title)
  const count = await products.count()

  console.log(count)

  for (let i = 0; i < count; i++) {
    if (await products.nth(i).locator('b').textContent() === 'ZARA COAT 3') {
      await products.nth(i).locator('text= Add To Cart').click()
      break
    }
  }
  //await page.pause()

  //await context.close();
});