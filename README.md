# Playwright Industry Project

This project demonstrates how to use Playwright for automated end-to-end testing, with a focus on Behavior-Driven Development (BDD) using `playwright-bdd`.

## Project Overview

This is a sample project showcasing the capabilities of Playwright for testing web applications. It includes examples of both standard Playwright tests and BDD-style tests. The project is structured to be easily extendable for testing various features of a web application.

## Features

*   **End-to-end testing:** Uses Playwright to automate browser interactions and verify application functionality.
*   **Behavior-Driven Development (BDD):** Uses `playwright-bdd` to write tests in a human-readable format using Gherkin syntax.
*   **Page Object Model (POM):** Organizes UI interactions into reusable classes, improving test maintenance and readability.
*   **Cross-browser testing:** Configured to run tests on multiple browsers like Chrome and Edge.
*   **CI/CD integration:** Can be easily integrated into CI/CD pipelines for automated testing.
*   **Reporting:** Generates detailed HTML reports with trace viewers for debugging failed tests.

## Installation Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd playwright-industry
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## Usage Examples

### Running BDD Tests

To run the BDD tests, use the following command:

```bash
npm run test:bdd:ui
```

This command will first generate the test files from the feature files and then run the tests in UI mode.

### Running Standard Playwright Tests

To run the standard Playwright tests, use the following command:

```bash
npm run test:playwright
```

### Running Tests in UI Mode

To run the tests in Playwright's UI mode for a better debugging experience, use:

```bash
npm run test:playwright:ui
```

### Running Tests in Debug Mode

To debug tests step-by-step, use:

```bash
npm run test:playwright:debug
```

## Configuration Options

The main configuration file for this project is `playwright.config.js`. Here you can configure:

*   **Browsers:** Add or remove browsers from the `projects` array.
*   **Test directory:** The `testDir` is configured by `playwright-bdd` to use the generated test files.
*   **Headless mode:** Set `headless: true` for CI/CD environments.
*   **Reporters:** Configure different reporters for test results.
*   **Timeouts:** Adjust timeout values for tests and assertions.

## API Reference

This project does not have a specific API to be documented. However, the Page Object Model implementation in the `features/pageObjects` directory can be considered as an internal API for the tests. Each Page Object class exposes methods to interact with a specific page of the application.

## Contributing Guidelines

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Write tests for your changes.
4.  Ensure all tests pass.
5.  Submit a pull request.

## License

This project is licensed under the ISC License.

## Troubleshooting

*   **Tests are failing unexpectedly:**
    *   Run the tests in UI mode (`npm run test:playwright:ui`) to visually inspect the browser interactions.
    *   Check the trace files in the `playwright-report` directory to debug the test execution step-by-step.
*   **`bddgen` command not found:**
    *   Ensure that you have installed the dependencies correctly by running `npm install`.
    *   The `bddgen` command is part of the `playwright-bdd` package.
