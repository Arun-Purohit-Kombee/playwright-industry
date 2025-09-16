# QA Team Guide: Playwright with MCP and Agent-Driven Automation

## 1. Introduction

This guide enables QA engineers to set up and operate Playwright with Model Context Protocol (MCP) integration for automated test case generation and execution. The setup minimizes manual coding by leveraging AI agents that generate BDD and Mocha-style tests through natural language instructions. This approach accelerates test creation, reduces maintenance overhead, and enables non-technical team members to contribute to test automation.

**Key Benefits:**
- **Minimal Coding**: Generate tests using natural language descriptions
- **Fast Setup**: Quick configuration with MCP server integration
- **Agent-Driven**: AI agents handle test scaffolding and execution logic

## 2. Prerequisites

### Required Tools & Versions
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher
- **VS Code**: Latest version with Cursor extension
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux Ubuntu 18.04+

### Installation Links
- [Node.js Installation Guide](https://nodejs.org/en/download/)
- [VS Code Download](https://code.visualstudio.com/download)
- [Cursor Extension](https://cursor.sh/)

### System Requirements
- **RAM**: Minimum 8GB (16GB recommended)
- **Storage**: 2GB free space for dependencies
- **Network**: Stable internet connection for MCP server communication

## 3. Playwright Project Setup

### Step 1: Installing Playwright in a Fresh Project

```bash
# Create new project directory
mkdir playwright-qa-automation
cd playwright-qa-automation

# Initialize npm project
npm init -y

# Install Playwright and dependencies
npm install --save-dev @playwright/test
npm install --save-dev @cucumber/cucumber
npm install --save-dev @babel/core @babel/preset-env @babel/register
npm install --save-dev chai
```

### Step 2: Initializing Project Structure

```bash
# Initialize Playwright configuration
npx playwright init

# Create directory structure
mkdir -p features/step_definitions
mkdir -p features/pageObjects
mkdir -p features/support
mkdir -p tests
mkdir -p reports
```

### Step 3: Validating Setup

Create a simple test file to verify installation:

```javascript
// tests/sample.spec.js
const { test, expect } = require('@playwright/test');

test('Playwright setup validation', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

Run the validation test:
```bash
npx playwright test tests/sample.spec.js
```

## 4. Configuring Playwright MCP Server

### What is MCP Server?
The Model Context Protocol (MCP) server acts as a bridge between AI agents and Playwright, enabling natural language control of browser automation. It translates human instructions into executable test code and manages test execution.

### Step 1: MCP Server Installation

Install the Playwright MCP package:
```bash
npm install --save-dev @playwright/mcp
```

### Step 2: VS Code/Cursor Configuration

Create or update your MCP configuration file at `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp"]
    }
  }
}
```

### Step 3: Testing MCP Connection

1. Open VS Code/Cursor in your project directory
2. Open the command palette (Ctrl+Shift+P / Cmd+Shift+P)
3. Type "MCP" and select "MCP: Connect to Server"
4. Verify the playwright server appears in the MCP panel

### Troubleshooting Common MCP Issues

**Connection Failed:**
- Ensure Node.js and npm are properly installed
- Check that `@playwright/mcp` package is installed
- Restart VS Code/Cursor after configuration changes

**Server Not Responding:**
- Verify internet connection
- Check firewall settings
- Try running `npx @playwright/mcp` manually in terminal

## 5. Creating Automated Test Cases Without Manual Coding

### How MCP Agents Generate Tests

MCP agents use accessibility snapshots to understand web page structure and generate test code based on natural language descriptions. They create semantic, maintainable tests that focus on user interactions rather than technical implementation details.

### BDD-Style Test Generation (Cucumber/Gherkin)

#### Example 1: User Login Flow

**Natural Language Instruction:**
"Create a BDD test for user login on the contractor portal. The test should verify successful login with valid credentials and check that the user is redirected to the dashboard."

**Generated Feature File:**
```gherkin
Feature: User Login
  As a contractor portal user
  I want to log in with my credentials
  So that I can access the dashboard

  @smoke @login
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid email "test@example.com"
    And I enter valid password "password123"
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see the welcome message
```

**Generated Step Definitions:**
```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function() {
    await this.page.goto('https://qa-contractorportal.birlaopus.com/');
    await expect(this.page.locator('input[type="email"]')).toBeVisible();
});

When('I enter valid email {string}', async function(email) {
    await this.page.fill('input[type="email"]', email);
});

When('I enter valid password {string}', async function(password) {
    await this.page.fill('input[type="password"]', password);
});

When('I click the login button', async function() {
    await this.page.click('button[type="submit"]');
});

Then('I should be redirected to the dashboard', async function() {
    await expect(this.page).toHaveURL(/.*\/dashboard/);
});

Then('I should see the welcome message', async function() {
    await expect(this.page.locator('h1')).toContainText('Welcome');
});
```

#### Example 2: Contractor Creation Flow

**Natural Language Instruction:**
"Generate a BDD test for creating a new contractor. Include form validation, location selection, and success confirmation."

**Generated Feature File:**
```gherkin
Feature: Contractor Creation
  As an admin user
  I want to create a new contractor
  So that contractors can be managed in the system

  @contractor @creation
  Scenario: Create contractor with complete details
    Given I am logged in as an admin
    When I navigate to the contractors section
    And I click "Create New Contractor"
    And I fill in contractor details:
      | Field      | Value                |
      | First Name | John                 |
      | Last Name  | Doe                  |
      | Email      | john.doe@example.com |
      | Mobile     | 9876543210           |
    And I select work location "Mumbai, Maharashtra"
    And I submit the contractor form
    Then I should see success message "Contractor created successfully"
    And the contractor should appear in the contractors list
```

### Mocha-Style Test Generation

#### Example 1: Shopping Cart Functionality

**Natural Language Instruction:**
"Create a Mocha test for shopping cart functionality. Test adding items, updating quantities, and checkout process."

**Generated Test File:**
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Shopping Cart Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/client');
        // Login setup
        await page.fill('input[type="email"]', 'test@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');
    });

    test('should add item to cart successfully', async ({ page }) => {
        // Wait for products to load
        await page.waitForSelector('.card-body');
        
        // Add first product to cart
        await page.locator('.card-body').first().locator('button').click();
        
        // Verify cart count updates
        await expect(page.locator('button:has-text("Cart 1")')).toBeVisible();
    });

    test('should update item quantity in cart', async ({ page }) => {
        // Add item to cart first
        await page.locator('.card-body').first().locator('button').click();
        
        // Navigate to cart
        await page.click('[routerlink*="cart"]');
        
        // Update quantity
        await page.locator('input[type="number"]').fill('2');
        
        // Verify quantity updated
        await expect(page.locator('input[type="number"]')).toHaveValue('2');
    });

    test('should proceed to checkout successfully', async ({ page }) => {
        // Add item and go to cart
        await page.locator('.card-body').first().locator('button').click();
        await page.click('[routerlink*="cart"]');
        
        // Click checkout
        await page.click('button:has-text("Checkout")');
        
        // Verify checkout page loaded
        await expect(page.locator('h1')).toContainText('Checkout');
    });
});
```

#### Example 2: Multi-Context User Testing

**Natural Language Instruction:**
"Generate a Mocha test that simulates multiple users (admin and regular user) accessing the system simultaneously with different permissions."

**Generated Test File:**
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Multi-User Access Control', () => {
    test('should handle admin and user contexts independently', async ({ browser }) => {
        // Create admin context
        const adminContext = await browser.newContext();
        const adminPage = await adminContext.newPage();
        
        // Create user context
        const userContext = await browser.newContext();
        const userPage = await userContext.newPage();
        
        // Admin login
        await adminPage.goto('https://qa-contractorportal.birlaopus.com/');
        await adminPage.fill('input[type="email"]', 'admin@example.com');
        await adminPage.fill('input[type="password"]', 'admin123');
        await adminPage.click('button[type="submit"]');
        
        // User login
        await userPage.goto('https://qa-contractorportal.birlaopus.com/');
        await userPage.fill('input[type="email"]', 'user@example.com');
        await userPage.fill('input[type="password"]', 'user123');
        await userPage.click('button[type="submit"]');
        
        // Verify different access levels
        await expect(adminPage.locator('text=Admin Dashboard')).toBeVisible();
        await expect(userPage.locator('text=User Dashboard')).toBeVisible();
        
        // Cleanup
        await adminContext.close();
        await userContext.close();
    });
});
```

## 6. Running and Managing Tests

### Step 1: Running Generated Tests

**BDD Tests (Cucumber):**
```bash
# Run all BDD tests
npm run test:cucumber

# Run specific tags
npm run test:cucumber:tags @smoke

# Run with specific browser
npx cucumber-js --world-parameters '{"browserName":"firefox"}'
```

**Mocha Tests (Playwright):**
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/shopping.spec.js

# Run with UI mode
npx playwright test --ui

# Run in debug mode
npx playwright test --debug
```

### Step 2: Reviewing Reports and Logs

**HTML Reports:**
- BDD reports: `reports/cucumber-report.html`
- Playwright reports: `playwright-report/index.html`

**Trace Files:**
- Located in `test-results/` directory
- View at [trace.playwright.dev](https://trace.playwright.dev)

### Step 3: Organizing Test Suites

**Recommended Structure:**
```
tests/
├── smoke/           # Critical path tests
├── regression/      # Full feature tests
├── integration/     # API + UI tests
└── performance/     # Load and performance tests

features/
├── login/           # Login-related features
├── contractor/      # Contractor management
├── reporting/       # Report generation
└── admin/          # Admin functionality
```

### Step 4: Rerunning Failed Tests

**Regenerate with MCP:**
1. Identify failed test in reports
2. Use natural language: "Fix the failing login test - the email field selector seems incorrect"
3. MCP agent will analyze and regenerate the test

**Manual Rerun:**
```bash
# Rerun failed tests only
npx playwright test --grep @failed

# Rerun with retry
npx playwright test --retries=3
```

## 7. Best Practices for the QA Team

### Minimal Manual Coding Approach

**Do:**
- Use natural language descriptions for test intentions
- Let MCP agents handle selector generation and page object creation
- Focus on test scenarios and business logic
- Use descriptive test names and comments

**Don't:**
- Manually write complex selectors
- Create page objects from scratch
- Hardcode test data in test files
- Write repetitive setup/teardown code

### Natural Language Test Descriptions

**Effective Instructions:**
- "Create a test that verifies user can add multiple items to cart and proceed to checkout"
- "Generate a BDD scenario for contractor approval workflow with admin approval step"
- "Test the search functionality with various input types and edge cases"

**Ineffective Instructions:**
- "Click button with ID submit-form"
- "Fill input field with selector .email-input"
- "Wait for element with class .loading-spinner"

### Modular Test Design

**Keep Tests Small:**
- One test = One user action or business scenario
- Maximum 10-15 steps per BDD scenario
- Focus on single responsibility per test

**Easy Regeneration:**
- Use data tables for test data
- Parameterize common actions
- Maintain clear separation between test logic and data

### Documentation Standards

**Test Case Documentation:**
- Include business context in feature descriptions
- Document test data requirements
- Maintain test case traceability matrix
- Update documentation when regenerating tests

## 8. Troubleshooting & FAQ

### Common Setup Issues

**Playwright Installation Errors:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

**MCP Server Connection Issues:**
- Verify MCP configuration in `~/.cursor/mcp.json`
- Check that `@playwright/mcp` is installed globally: `npm list -g @playwright/mcp`
- Restart VS Code/Cursor completely
- Check network connectivity and firewall settings

**Browser Launch Failures:**
```bash
# Install browsers manually
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

### Test Generation Issues

**MCP Agent Not Understanding Instructions:**
- Be more specific about page elements and actions
- Provide context about the application being tested
- Break complex scenarios into smaller, focused instructions
- Include example URLs or page titles for reference

**Generated Tests Not Working:**
- Check if selectors are too specific or fragile
- Verify test data is valid and available
- Ensure application state matches test expectations
- Use MCP to regenerate with more robust selectors

### Configuration Updates

**Updating Dependencies:**
```bash
# Update Playwright
npm update @playwright/test

# Update MCP server
npm update @playwright/mcp

# Update Cucumber
npm update @cucumber/cucumber
```

**Environment Changes:**
- Update base URLs in configuration files
- Modify test data for different environments
- Adjust timeouts for slower environments
- Update browser configurations as needed

### Performance Optimization

**Test Execution Speed:**
- Use `--workers` flag for parallel execution
- Implement proper wait strategies instead of fixed delays
- Use headless mode for CI/CD pipelines
- Optimize test data and setup procedures

**Resource Management:**
- Close browser contexts after tests
- Clean up test data between test runs
- Use appropriate browser configurations
- Monitor memory usage during test execution

---

## Quick Reference Commands

```bash
# Setup
npm init -y
npm install --save-dev @playwright/test @cucumber/cucumber @playwright/mcp

# Running Tests
npx playwright test                    # Run all Playwright tests
npm run test:cucumber                  # Run all BDD tests
npx playwright test --ui               # Run with UI mode
npx playwright test --debug            # Run in debug mode

# MCP Commands
npx @playwright/mcp                    # Start MCP server manually
npx playwright codegen                 # Generate tests manually

# Reports
npx playwright show-report            # Open Playwright report
open reports/cucumber-report.html     # Open BDD report
```

This guide provides a comprehensive foundation for QA teams to leverage Playwright with MCP for efficient, agent-driven test automation with minimal manual coding requirements.
