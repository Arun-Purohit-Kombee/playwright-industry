const { test, expect } = require('@playwright/test')

test('End-to-end shopping flow', async ({ browser }) => {
    // Browser setup with maximized window
    const context = await browser.newContext({
        screen: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();
    await page.evaluate(() => window.moveTo(0, 0));

    // Navigate to the website
    await page.goto('https://rahulshettyacademy.com/client');

    // Check if already logged in and log out if necessary
    const signOutButton = page.getByRole('button', { name: 'Sign Out' });
    if (await signOutButton.isVisible()) {
        await signOutButton.click();
        // Wait for login page
        await page.waitForURL('**/auth/login');
    }

    // Login
    await page.getByRole('textbox', { name: 'email@example.com' }).fill('arun.purohit@kombee.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Arun@123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for products to load
    await page.locator('.card-body b').first().waitFor();

    // Add ZARA COAT 3 to cart
    const products = page.locator('.card-body');
    await products.filter({ hasText: 'ZARA COAT 3' }).getByRole('button', { name: ' Add To Cart' }).click();

    // Wait for cart to update and verify
    await page.locator('button:has-text("Cart 1")').waitFor();

    // Navigate to cart
    await page.locator('[routerlink*="cart"]').click();

    // Verify item in cart
    await expect(page.getByRole('heading', { name: 'ZARA COAT 3', level: 3 })).toBeVisible();

    // Click checkout
    await page.getByRole('button', { name: 'Checkout❯' }).click();

    // Fill payment information
    await page.locator('input[type="text"]').first().fill('4242424242424242');
    await page.locator('input[type="text"]').nth(1).fill('123');
    await page.locator('input[type="text"]').nth(2).fill('Test User');

    // Select expiry date (01/16)
    const monthDropdown = page.locator('select').first();
    const yearDropdown = page.locator('select').nth(1);
    await monthDropdown.selectOption('01');
    await yearDropdown.selectOption('16');

    // Fill shipping information
    await page.getByRole('textbox', { name: 'Select Country' }).fill('india');
    await page.waitForTimeout(2000); // Wait for country suggestions

    // Place order
    await page.getByText('Place Order').click();

    // Optional: Wait for order confirmation
    await page.waitForLoadState('networkidle');

    // Close the context
    await context.close();

    
});