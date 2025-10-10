import { test, expect } from '@playwright/test';
test.describe('Test Group', () => {
  test('seed', async ({ page }) => {
    await page.goto('https://qa-contractorportal.birlaopus.com/'); // Update with your app URL
    // Add login steps if needed
  });
});