@claimcenter

Feature: Add Activity in Claim center
    As a user, I want to perform Add Activity transaction in claim center

    @add_activity_002
    Scenario: Adding the activity
        Given the user logs into the claims center
        When the user loads data "defaultDataSet" from json "FNOLTestData"
        And the user creates new FNOL
        And the user search with claim number
        And the user performs add activity
        Then the add activity is added successfully
