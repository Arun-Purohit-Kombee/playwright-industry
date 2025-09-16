// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  testMatch: [
    '**/*.spec.js',
    'session 24 e2e shopping flow/Shope2e.spec.js'
  ],
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  use: {
    launchOptions: {
      args: ['--start-maximized']
    },
    browserName: "chromium",
    headless: false,
    trace: 'on',
    //trace:'retain-on-failure' #this will make trace.zip only if the test fails
    screenshot: 'on',

  },
  reporter: 'html',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        // ...devices['Desktop Chrome'],
        viewport: null
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

