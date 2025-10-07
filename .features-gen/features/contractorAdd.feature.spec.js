// Generated from: features\contractorAdd.feature
import { test } from "playwright-bdd";

test.describe('Contractor Creation in Birla Opus Portal', () => {

  test('Create a new contractor with valid details', { tag: ['@smoke', '@contractor'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in to Birla Opus portal', null, { page }); 
    await When('I navigate to contractors section', null, { page }); 
    await And('I click on create new contractor', null, { page }); 
    await And('I fill in the contractor details:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"First Name"},{"value":"Auto"}]},{"cells":[{"value":"Last Name"},{"value":"Contractor"}]},{"cells":[{"value":"Mobile No"},{"value":"9999999998"}]},{"cells":[{"value":"Email"},{"value":"auto.contractor@example.com"}]}]}}, { page }); 
    await And('I select work location:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"State"},{"value":"Maharashtra"}]},{"cells":[{"value":"Area"},{"value":"Mumbai"}]},{"cells":[{"value":"District"},{"value":"Mumbai"}]},{"cells":[{"value":"Pincode"},{"value":"400001"}]},{"cells":[{"value":"Territory"},{"value":"APZ (Colaba)"}]}]}}, { page }); 
    await And('I submit the form and confirm', null, { page }); 
    await Then('I should see a success message', null, { page }); 
    await And('the contractor should be listed in the contractors grid', null, { page }); 
  });

  test('Filter contractors by Registration Date range', { tag: ['@filter', '@contractors'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in to Birla Opus portal', null, { page }); 
    await When('I go to Contractors list', null, { page }); 
    await And('I filter Registration Date from "2025-09-01" to "2025-09-19"', null, { page }); 
    await Then('I should see all contractor rows with Registration Date within "2025-09-01" and "2025-09-19"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contractorAdd.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@smoke","@contractor"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in to Birla Opus portal","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I navigate to contractors section","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I click on create new contractor","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I fill in the contractor details:","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I select work location:","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I submit the form and confirm","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see a success message","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And the contractor should be listed in the contractors grid","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":29,"tags":["@filter","@contractors"],"steps":[{"pwStepLine":18,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given I am logged in to Birla Opus portal","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I go to Contractors list","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And I filter Registration Date from \"2025-09-01\" to \"2025-09-19\"","stepMatchArguments":[{"group":{"start":32,"value":"\"2025-09-01\"","children":[{"start":33,"value":"2025-09-01","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"2025-09-19\"","children":[{"start":49,"value":"2025-09-19","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I should see all contractor rows with Registration Date within \"2025-09-01\" and \"2025-09-19\"","stepMatchArguments":[{"group":{"start":63,"value":"\"2025-09-01\"","children":[{"start":64,"value":"2025-09-01","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":80,"value":"\"2025-09-19\"","children":[{"start":81,"value":"2025-09-19","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end