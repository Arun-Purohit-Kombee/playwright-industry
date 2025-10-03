// @ts-check
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/opusFlows',

  // Give failing tests 3 retry attempts
  //retries: 3,

  testMatch: [
    '**/*.spec.js',
    'session 24 e2e shopping flow/Shope2e.spec.js'
  ],
  timeout: 100 * 1000,
  workers: 2,
  expect: {
    timeout: 40 * 1000
  },
  use: {
    launchOptions: {
      // args: ['--start-maximized'],
      channel: 'msedge',
    },
    viewport: { width: 1920, height: 1080 },  
    screen: { width: 1920, height: 1080 },
    browserName: 'chromium',
    headless: false,
    trace: 'on',
    screenshot: 'on',
    video: 'on'
  },
  reporter: 'html',
  projects: [
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     viewport: { width: 1920, height: 1080 }
    //   },
    // },

    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome'
      },
    },
    {
      name: 'msEdge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      },
    },
  ],
});



