Institutional Contractor MCP feature
===================================

What I added
- `features/institutionalContractor.mcp.feature` - Gherkin scenario using the data-testids you provided
- `features/pageObjects/InstitutionalContractorMCPPage.js` - Page Object that uses those data-testids and sensible waits
- `features/step_definitions/institutionalContractor.mcp.steps.js` - Step definitions wiring the feature to the page object

How to verify locally (recommended)
1. Start the app or ensure you can reach the QA URL used in `LoginPage.goto()`.
2. Open a terminal in the project root and run:

```cmd
npm run test:cucumber
```

3. If selectors fail, use Playwright codegen or the Playwright Inspector locally to verify selectors:

```cmd
npx playwright codegen https://qa-contractorportal.birlaopus.com/
```

Using the Playwright Inspector (UI) will let you click elements and confirm the correct `data-testid` values.

Notes
- I couldn't run the browser here. The page object strictly uses the data-testids you listed (for durability). If any test fails, it usually means the UI has slightly different test ids or the element is inside an iframe/modal that requires different handling; use codegen to confirm and update the test id in `InstitutionalContractorMCPPage.js`.
