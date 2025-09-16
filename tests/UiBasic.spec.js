const { test, expect } = require('@playwright/test')

/* test("painter test", async ({ browser, page }) => {
  // const context = await browser.newContext()
  // const page = await context.newPage()
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
}) */

test("painter test 2", async ({ browser }) => {
  
  const context = await browser.newContext({
    headless: false,
    slowMo: 1000,
    args: ['--start-maximized']
  })
  const page = await context.newPage()
  const userName = await page.locator('#username')
  const password = page.locator("[type='password']")
  const signIn = page.locator("#signInBtn")
  const cardTitles = page.locator(".card-body a")
  const dropdown = page.locator("select.form-control")
  const userRadiobutton = page.locator(".radiotextsty").last()
  const allTitles = await cardTitles.allTextContents()
  const documentLink = page.locator("[href*='documents-request']")

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  await page.title()
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

  await userName.fill("learning")

  await page.locator("[type='password']").fill("learning")


  await signIn.click()
  await page.locator("#signInBtn").click()
  console.log(await page.locator("[style*='block']").textContent())
  await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.')
  await expect(documentLink).toHaveAttribute("class", "blinkingText")
  await userName.fill("")
  await userName.fill("rahulshettyacademy")
  await password.fill("learning")

  await userRadiobutton.last().click()
  console.log(await userRadiobutton.last().isChecked())

  await page.locator("#okayBtn").click()
  await dropdown.selectOption("consult")
  await signIn.click()
  

  //console.log(await cardTitles.nth(0).textContent())

  console.log(allTitles);

})


test('Child window handling', async ({ browser }) => {

  const context = await browser.newContext()
  const page = await context.newPage()
  const userName =  page.locator('#username')

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  const documentLink = page.locator("[href*='documents-request']")

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(), // Opens a new tab
  ]);

  const text = await newPage.locator(".red").textContent()
  console.log(text)
  await page.locator("#username").fill("rahulshettyacademy")
  
  // await documentLink.click()
  // const page2 = await context.waitForEvent('page')
  
})