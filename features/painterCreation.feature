Feature: Painter Creation in Birla Opus Portal
    As an admin user
    I want to create a new painter
    So that they can be managed in the system

    @smoke @painter
    Scenario: Create a new painter with valid details
        Given I am logged in to Birla Opus portal
        And I navigate to painters section
        When I click on create new painter button
        And I fill in the painter details:
            | Field             | Value                    |
            | First Name        | Test                     |
            | Last Name         | Painter                  |
            | Mobile No         | 8001275755               |
            | Email             | test.painter@example.com |
            | Type of User      | Painter                  |
            | Contractor Mobile | 8547854785               |
            | Contractor First  | Test                     |
            | Contractor Last   | Contractor               |
        And I select work location details:
            | Field     | Value       |
            | State     | Maharashtra |
            | Area      | Kolhapur    |
            | District  | Sangli      |
            | Pincode   | 415301      |
            | Territory | ATH (Karad) |
        And I click the submit button
        And I confirm the painter details
        Then I should see a success message
#And the new painter should be listed in the painters grid