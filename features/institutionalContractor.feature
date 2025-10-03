@institutional
Feature: Institutional Contractor Creation in Birla Opus Portal

  Scenario: Create a new institutional contractor with valid details
    Given I am logged in as institutional contractor admin
    When I create a new institutional contractor profile with valid details
    Then I should be redirected to Institutional Contractors list page
# Feature: Institutional Contractor Login

#   # @institutional @login
#   # Scenario: Login as Institutional Contractor and reach dashboard
#   #   Given I navigate to the Birla Opus QA contractor portal
#   #   When I login with email "prachi@adityabirla.com" and otp "123456"
#   #   Then I should see the Institutional Contractors option on the dashboard

#   # @institutional @create
#   # Scenario: Create a new Institutional Contractor successfully
#   #   Given I am logged in as institutional contractor admin
#   #   When I create a new institutional contractor profile with valid details
#   #   Then I should be redirected to Institutional Contractors list page

#   # Feature: Institutional Contractor Creation in Birla Opus Portal
#   #   As an admin user
#   #   I want to create a new institutional contractor
#   #   So that institutional partners can be managed in the system

#   @smoke @contractor @institutional
#   Scenario: Create a new institutional contractor with valid details
#     Given I am logged in to Birla Opus portal
#     When I navigate to contractors section
#     And I click on create new contractor
#     And I choose contractor type "Institutional"
#     And I fill in the contractor details:
#       | Field      | Value                            |
#       | First Name | Auto                             |
#       | Last Name  | InstContractor                   |
#       | Mobile No  | 9999999997                       |
#       | Email      | auto.inst.contractor@example.com |
#     And I fill in institutional details:
#       | Field             | Value       |
#       | Organization Name | Auto Org QA |
#       | Organization Type | Builder     |
#     And I select work location:
#       | Field     | Value        |
#       | State     | Maharashtra  |
#       | Area      | Mumbai       |
#       | District  | Mumbai       |
#       | Pincode   | 400001       |
#       | Territory | APZ (Colaba) |
#     And I submit the form and confirm
#     Then I should see a success message
#     # And the contractor should be listed in the contractors grid


