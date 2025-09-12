const { test, expect } = require('@playwright/test');

test('Multiple Browser Contexts Demo', async ({ browser }) => {
    // Create two different browser contexts
    const adminContext = await browser.newContext();
    const userContext = await browser.newContext();

    // Create pages for each context
    const adminPage = await adminContext.newPage();
    const userPage = await userContext.newPage();

    // Demo using a sample website - let's use a demo site
    await adminPage.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userPage.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Admin user login
    await adminPage.locator('#username').fill('admin123');
    await adminPage.locator('#password').fill('learning');
    await adminPage.locator('#signInBtn').click();

    // Regular user login
    await userPage.locator('#username').fill('user123');
    await userPage.locator('#password').fill('learning');
    await userPage.locator('#signInBtn').click();

    // Now both contexts are running independently
    // You can perform different actions in each context

    // Example: Check if both users are on different sessions
    const adminTitle = await adminPage.title();
    const userTitle = await userPage.title();

    console.log(`Admin page title: ${adminTitle}`);
    console.log(`User page title: ${userTitle}`);

    // Clean up - close both contexts
    await adminContext.close();
    await userContext.close();
});

// Example with different storage states
test('Contexts with different storage states', async ({ browser }) => {
    // Create contexts with different storage states
    const context1 = await browser.newContext({
        storageState: {
            cookies: [],
            origins: [
                {
                    origin: 'https://rahulshettyacademy.com',
                    localStorage: [
                        {
                            name: 'user-preference',
                            value: 'dark-mode'
                        }
                    ]
                }
            ]
        }
    });

    const context2 = await browser.newContext({
        storageState: {
            cookies: [],
            origins: [
                {
                    origin: 'https://rahulshettyacademy.com',
                    localStorage: [
                        {
                            name: 'user-preference',
                            value: 'light-mode'
                        }
                    ]
                }
            ]
        }
    });

    // Create pages for each context
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    // Navigate to the same site with different storage states
    await page1.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page2.goto('https://rahulshettyacademy.com/loginpagePractise/');

    page1.pause();
    page2.pause();

    // Clean up
    await context1.close();
    await context2.close();

});