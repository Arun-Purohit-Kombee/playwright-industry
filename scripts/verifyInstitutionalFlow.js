const { chromium } = require('@playwright/test');
const path = require('path');

const LoginPage = require(path.join(__dirname, '..', 'features', 'pageObjects', 'LoginPage'));
const InstitutionalContractorPage = require(path.join(__dirname, '..', 'features', 'pageObjects', 'InstitutionalContractorPage'));

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  try {
    console.log('Navigating to portal...');
    await page.goto('https://qa-contractorportal.birlaopus.com/', { waitUntil: 'networkidle' });

    const loginPage = new LoginPage(page);
    console.log('Logging in...');
    await loginPage.login('prachi@adityabirla.com', '123456');
    console.log('Logged in, waiting for dashboard...');
    await page.waitForURL(/dashboard/, { timeout: 60000 });

    const icPage = new InstitutionalContractorPage(page);
    console.log('Opening create form...');
    await icPage.openCreateForm();
    console.log('Filling profile details...');
    await icPage.fillProfileDetails({
      firstName: 'E2E_Test',
      lastName: 'InstContractor',
      mobile: '9990012345',
      email: `auto.inst.${Date.now()}@example.com`,
      subType: 'Painting Contractor (IC1)',
      birthdayLabel: 'September 10, 2007',
      territory: 'PP-0020 (Painter Automation QA)'
    });
    console.log('Skipping to finish...');
    await icPage.skipToFinish();

    console.log('Verifying final page...');
    await page.waitForURL(/\/institutional-contractors$/, { timeout: 30000 });
    const heading = page.getByRole('heading', { name: 'User Management' });
    await heading.waitFor({ state: 'visible', timeout: 10000 });

    console.log('Flow completed successfully');
  } catch (err) {
    console.error('Flow failed:', err);
    const screenshotPath = path.join(__dirname, '..', 'test-results', `verify-institutional-failure-${Date.now()}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('Saved screenshot to', screenshotPath);
    process.exitCode = 1;
  } finally {
    await page.close();
    await context.close();
    await browser.close();
  }
})();
