@policycenter

Feature: Add Activity in policy center
    As a user I want to perform Add Activity transaction in policy center

    @add_activity_001
    Scenario: Adding the activity from the account level
        Given the user logs into the policy center as superuser
        When the user loads the data "defaultDataSet" from json "AddActivityTestData"
        And the user creates personal account
        And the user performs add activity transaction in account level
        Then the add activity should be successful