Feature: CMS pages activity into the admin panel of Birla Opus

  Background:
    Given A user is logged into the portal
    When A user lands on the CMS management page

  Scenario Outline: Page validation by clicking on view icon on cms pages
    When A user clicks on the view icon of the "<label>" on the cms page
    Then A user should be navigated to the appropriate "<label>" "<url>" on the cms page

    Examples:
      | label              | url              |
      | Privacy Policy     | cms-pages/1/view |
      | Terms & Conditions | cms-pages/2/view |
      | Loyalty            | cms-pages/3/view |
      | FAQs               | cms-pages/4/view |
      | Opus Partner       | cms-pages/5/view |

  Scenario Outline: Data updation by clicking on edit icon on cms pages
    When A user clicks on the edit icon of the "<label>" on the cms page
    And A user update data of particular "<label>" cms page and clicks on submit button
    Then A user should be navigated to the cms management page

    Examples:
      | label              |
      | Privacy Policy     |
      | Terms & Conditions |
      | Loyalty            |
      | FAQs               |
      | Opus Partner       |
