// import { chromium, BrowserContext, Page } from '@playwright/test'
// import { mkdirSync, writeFileSync } from 'fs'
// import { dirname } from 'path'

// async function ensureDir(filePath: string): Promise<void> {
//   const dir = dirname(filePath)
//   mkdirSync(dir, { recursive: true })
// }

// export default async function globalSetup(): Promise<void> {
//   const storagePath = 'storage/auth.json'

//   const context: BrowserContext = await chromium.launchPersistentContext('.auth-profile', {
//     headless: true,
//   })
//   const page: Page = await context.newPage()

//   await page.goto('https://qa-contractorportal.birlaopus.com/')
//   await page.getByTestId('email').fill('prachi@adityabirla.com')
//   await page.getByTestId('login_button').click()
//   await page.getByTestId('verify_otp_code').fill('123456')
//   await Promise.all([
//     page.getByTestId('verifyOtp_button').click(),
//     page.waitForURL(/\/dashboard(?:\/|$)/, { timeout: 30000 }),
//   ])

//   await ensureDir(storagePath)
//   await context.storageState({ path: storagePath })

//   await context.close()
// }



