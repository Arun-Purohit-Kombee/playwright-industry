# Feature: Contractor Creation in Birla Opus Portal
#   As an admin user
#   I want to create a new contractor
#   So that contractors can be managed in the system

  # @smoke @contractor
  # Scenario: Create a new contractor with valid details
  #   Given I am logged in to Birla Opus portal
  #   When I navigate to contractors section
  #   And I click on create new contractor
  #   And I fill in the contractor details:
  #     | Field      | Value                       |
  #     | First Name | Auto                        |
  #     | Last Name  | Contractor                  |
  #     | Mobile No  | 9999999998                  |
  #     | Email      | auto.contractor@example.com |
  #   And I select work location:
  #     | Field     | Value        |
  #     | State     | Maharashtra  |
  #     | Area      | Mumbai       |
  #     | District  | Mumbai       |
  #     | Pincode   | 400001       |
  #     | Territory | APZ (Colaba) |
  #   And I submit the form and confirm
  #   Then I should see a success message
  #   And the contractor should be listed in the contractors grid

  # @filter @contractors
  # Scenario: Filter contractors by Registration Date range
  #   Given I am logged in to Birla Opus portal
  #   When I go to Contractors list
  #   And I filter Registration Date from "2025-09-01" to "2025-09-19"
  #   Then I should see all contractor rows with Registration Date within "2025-09-01" and "2025-09-19"