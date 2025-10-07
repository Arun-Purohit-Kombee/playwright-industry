// Generated from: features\cmsPages.feature
import { test } from "playwright-bdd";

test.describe('CMS pages activity into the admin panel of Birla Opus', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('A user is logged into the portal', null, { page }); 
    await When('A user lands on the CMS management page', null, { page }); 
  });
  
  test.describe('Page validation by clicking on view icon on cms pages', () => {

    test('Example #1', async ({ When, Then, page }) => { 
      await When('A user clicks on the view icon of the "Privacy Policy" on the cms page', null, { page }); 
      await Then('A user should be navigated to the appropriate "Privacy Policy" "cms-pages/1/view" on the cms page', null, { page }); 
    });

    test('Example #2', async ({ When, Then, page }) => { 
      await When('A user clicks on the view icon of the "Terms & Conditions" on the cms page', null, { page }); 
      await Then('A user should be navigated to the appropriate "Terms & Conditions" "cms-pages/2/view" on the cms page', null, { page }); 
    });

    test('Example #3', async ({ When, Then, page }) => { 
      await When('A user clicks on the view icon of the "Loyalty" on the cms page', null, { page }); 
      await Then('A user should be navigated to the appropriate "Loyalty" "cms-pages/3/view" on the cms page', null, { page }); 
    });

    test('Example #4', async ({ When, Then, page }) => { 
      await When('A user clicks on the view icon of the "FAQs" on the cms page', null, { page }); 
      await Then('A user should be navigated to the appropriate "FAQs" "cms-pages/4/view" on the cms page', null, { page }); 
    });

    test('Example #5', async ({ When, Then, page }) => { 
      await When('A user clicks on the view icon of the "Opus Partner" on the cms page', null, { page }); 
      await Then('A user should be navigated to the appropriate "Opus Partner" "cms-pages/5/view" on the cms page', null, { page }); 
    });

  });

  test.describe('Data updation by clicking on edit icon on cms pages', () => {

    test('Example #1', async ({ When, Then, And, page }) => { 
      await When('A user clicks on the edit icon of the "Privacy Policy" on the cms page', null, { page }); 
      await And('A user update data of particular "Privacy Policy" cms page and clicks on submit button', null, { page }); 
      await Then('A user should be navigated to the cms management page', null, { page }); 
    });

    test('Example #2', async ({ When, Then, And, page }) => { 
      await When('A user clicks on the edit icon of the "Terms & Conditions" on the cms page', null, { page }); 
      await And('A user update data of particular "Terms & Conditions" cms page and clicks on submit button', null, { page }); 
      await Then('A user should be navigated to the cms management page', null, { page }); 
    });

    test('Example #3', async ({ When, Then, And, page }) => { 
      await When('A user clicks on the edit icon of the "Loyalty" on the cms page', null, { page }); 
      await And('A user update data of particular "Loyalty" cms page and clicks on submit button', null, { page }); 
      await Then('A user should be navigated to the cms management page', null, { page }); 
    });

    test('Example #4', async ({ When, Then, And, page }) => { 
      await When('A user clicks on the edit icon of the "FAQs" on the cms page', null, { page }); 
      await And('A user update data of particular "FAQs" cms page and clicks on submit button', null, { page }); 
      await Then('A user should be navigated to the cms management page', null, { page }); 
    });

    test('Example #5', async ({ When, Then, And, page }) => { 
      await When('A user clicks on the edit icon of the "Opus Partner" on the cms page', null, { page }); 
      await And('A user update data of particular "Opus Partner" cms page and clicks on submit button', null, { page }); 
      await Then('A user should be navigated to the cms management page', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cmsPages.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When A user clicks on the view icon of the \"Privacy Policy\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Privacy Policy\"","children":[{"start":39,"value":"Privacy Policy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the appropriate \"Privacy Policy\" \"cms-pages/1/view\" on the cms page","stepMatchArguments":[{"group":{"start":46,"value":"\"Privacy Policy\"","children":[{"start":47,"value":"Privacy Policy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":63,"value":"\"cms-pages/1/view\"","children":[{"start":64,"value":"cms-pages/1/view","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When A user clicks on the view icon of the \"Terms & Conditions\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Terms & Conditions\"","children":[{"start":39,"value":"Terms & Conditions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the appropriate \"Terms & Conditions\" \"cms-pages/2/view\" on the cms page","stepMatchArguments":[{"group":{"start":46,"value":"\"Terms & Conditions\"","children":[{"start":47,"value":"Terms & Conditions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"cms-pages/2/view\"","children":[{"start":68,"value":"cms-pages/2/view","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When A user clicks on the view icon of the \"Loyalty\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Loyalty\"","children":[{"start":39,"value":"Loyalty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the appropriate \"Loyalty\" \"cms-pages/3/view\" on the cms page","stepMatchArguments":[{"group":{"start":46,"value":"\"Loyalty\"","children":[{"start":47,"value":"Loyalty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"cms-pages/3/view\"","children":[{"start":57,"value":"cms-pages/3/view","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When A user clicks on the view icon of the \"FAQs\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"FAQs\"","children":[{"start":39,"value":"FAQs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the appropriate \"FAQs\" \"cms-pages/4/view\" on the cms page","stepMatchArguments":[{"group":{"start":46,"value":"\"FAQs\"","children":[{"start":47,"value":"FAQs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"cms-pages/4/view\"","children":[{"start":54,"value":"cms-pages/4/view","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When A user clicks on the view icon of the \"Opus Partner\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Opus Partner\"","children":[{"start":39,"value":"Opus Partner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the appropriate \"Opus Partner\" \"cms-pages/5/view\" on the cms page","stepMatchArguments":[{"group":{"start":46,"value":"\"Opus Partner\"","children":[{"start":47,"value":"Opus Partner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"cms-pages/5/view\"","children":[{"start":62,"value":"cms-pages/5/view","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When A user clicks on the edit icon of the \"Privacy Policy\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Privacy Policy\"","children":[{"start":39,"value":"Privacy Policy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And A user update data of particular \"Privacy Policy\" cms page and clicks on submit button","stepMatchArguments":[{"group":{"start":33,"value":"\"Privacy Policy\"","children":[{"start":34,"value":"Privacy Policy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the cms management page","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When A user clicks on the edit icon of the \"Terms & Conditions\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Terms & Conditions\"","children":[{"start":39,"value":"Terms & Conditions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And A user update data of particular \"Terms & Conditions\" cms page and clicks on submit button","stepMatchArguments":[{"group":{"start":33,"value":"\"Terms & Conditions\"","children":[{"start":34,"value":"Terms & Conditions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the cms management page","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When A user clicks on the edit icon of the \"Loyalty\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Loyalty\"","children":[{"start":39,"value":"Loyalty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And A user update data of particular \"Loyalty\" cms page and clicks on submit button","stepMatchArguments":[{"group":{"start":33,"value":"\"Loyalty\"","children":[{"start":34,"value":"Loyalty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the cms management page","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When A user clicks on the edit icon of the \"FAQs\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"FAQs\"","children":[{"start":39,"value":"FAQs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And A user update data of particular \"FAQs\" cms page and clicks on submit button","stepMatchArguments":[{"group":{"start":33,"value":"\"FAQs\"","children":[{"start":34,"value":"FAQs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the cms management page","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given A user is logged into the portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When A user lands on the CMS management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When A user clicks on the edit icon of the \"Opus Partner\" on the cms page","stepMatchArguments":[{"group":{"start":38,"value":"\"Opus Partner\"","children":[{"start":39,"value":"Opus Partner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And A user update data of particular \"Opus Partner\" cms page and clicks on submit button","stepMatchArguments":[{"group":{"start":33,"value":"\"Opus Partner\"","children":[{"start":34,"value":"Opus Partner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A user should be navigated to the cms management page","stepMatchArguments":[]}]},
]; // bdd-data-end