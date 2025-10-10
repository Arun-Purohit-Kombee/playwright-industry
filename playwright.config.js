// @ts-check
import { defineConfig, devices } from '@playwright/test'
import { defineBddConfig, cucumberReporter } from 'playwright-bdd'

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/step_definitions/**/*.js',
  aiFix: {
    promptAttachment: true,
    promptTemplate: '.vscode/prompts/promptTemplate.txt'
  },
  verbose: true,
  // tags: '@smoke and not @wip',
})

export default defineConfig({
  testDir,

  // Give failing tests 3 retry attempts
  // retries: 3,

  // testMatch: [
  //   '**/*.spec.js',
  //   'session 24 e2e shopping flow/Shope2e.spec.js'
  // ],
  // testMatch is not needed when using playwright-bdd (generated specs)
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
  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    [
      'allure-playwright', {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: false
      }]
  ],
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



