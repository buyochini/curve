Feature: Contact App

  Background:
    Given I see the contact permission access popup

  Scenario: TC_001 Accept permission access
    When I select "accept" on the permission access popup
    Then I should see "no contacts" popup screen

  Scenario: TC_002 Deny permission access
    When I select "deny" on the permission access popup
    And I should see "no permission denied" popup screen
    Then I should not have access to the app

  Scenario: TC_003 Create contact
    When I select "accept" on the permission access popup
    And I select OK no the contacts popup screen
    And I select the add contact plus sign
    Then i should see coming soon

  # Unable to complete implementation as the apk file is not complete
  Scenario: TC_004 View contact
    When I select "accept" on the permission access popup
    Then I should be able to view my contact

  # Unable to complete implementation as the apk file is not complete
  Scenario: TC_005 Scroll contact
    Then I should be able to scroll to a contact not in view

  # Unable to complete implementation as the apk file is not complete
  Scenario: TC_006 View all contacts
    When I get the total amount of contacts
    Then I should be able to view all the contacts

  # Unable to complete implementation as the apk file is not complete
  Scenario: TC_007 Verify image uploaded
    Then I should "see" if an image is uploaded for the contact

  # Unable to complete implementation as the apk file is not complete
  Scenario: TC_008 Verify image not uploaded
    Then I should "not see" if an image is uploaded for the contact
