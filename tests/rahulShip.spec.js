const { test, expect } = require('@playwright/test')

test("Shop test 2", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: null,
    screen: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  await page.evaluate(() => window.moveTo(0, 0));
  const userName = await page.locator('#userEmail')
  const password = await page.locator("#userPassword")
  const signIn = await page.locator("[value='Login']")



  await page.goto("https://rahulshettyacademy.com/client")
  await userName.fill("arun.purohit@kombee.com")
  await password.fill("Arun@123")
  await signIn.click()
  //await page.waitForLoadState("networkidle")
  await page.locator(".card-body b").first().waitFor()
  const cardTitles = await page.locator(".card-body b").allTextContents()
  
  console.log(await cardTitles)

})