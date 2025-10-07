Feature: Institutional Contractor - MCP verified flow
  As an admin user
  I want to add an institutional contractor using data-testid selectors
  So that the contractor is registered and visible in the contractors list

  Scenario: Create an institutional contractor (MCP-style selectors)
    Given I am logged in as an admin user
    When I navigate to the institutional contractors page
    And I click the Add New button
    And I fill in the institutional contractor form with:
      | First Name | Last Name | Mobile No  | Email                |
      | John       | Doe       | 9234565592 | john.doe@example.com |
    And I choose institutional contractor type
    And I select work location:
      | State                       | Area              | District | Pincode | Territory  |
      | Andaman And Nicobar Islands | Andaman & Nicobar | Nicobar  |  744301 | PP-0073 () |
    And I submit and confirm the form
    Then I should see a success message
    And the new contractor should be visible in the list
