// Generated from: features\institutionalContractor.mcp.feature
import { test } from "playwright-bdd";

test.describe('Institutional Contractor - MCP verified flow', () => {

  test('Create an institutional contractor (MCP-style selectors)', async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in as an admin user', null, { page }); 
    await When('I navigate to the institutional contractors page', null, { page }); 
    await And('I click the Add New button', null, { page }); 
    await And('I fill in the institutional contractor form with:', {"dataTable":{"rows":[{"cells":[{"value":"First Name"},{"value":"Last Name"},{"value":"Mobile No"},{"value":"Email"}]},{"cells":[{"value":"John"},{"value":"Doe"},{"value":"9234565592"},{"value":"john.doe@example.com"}]}]}}, { page }); 
    await And('I choose institutional contractor type', null, { page }); 
    await And('I select work location:', {"dataTable":{"rows":[{"cells":[{"value":"State"},{"value":"Area"},{"value":"District"},{"value":"Pincode"},{"value":"Territory"}]},{"cells":[{"value":"Andaman And Nicobar Islands"},{"value":"Andaman & Nicobar"},{"value":"Nicobar"},{"value":"744301"},{"value":"PP-0073 ()"}]}]}}, { page }); 
    await And('I submit and confirm the form', null, { page }); 
    await Then('I should see a success message', null, { page }); 
    await And('the new contractor should be visible in the list', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\institutionalContractor.mcp.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in as an admin user","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I navigate to the institutional contractors page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click the Add New button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I fill in the institutional contractor form with:","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I choose institutional contractor type","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I select work location:","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I submit and confirm the form","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see a success message","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the new contractor should be visible in the list","stepMatchArguments":[]}]},
]; // bdd-data-end