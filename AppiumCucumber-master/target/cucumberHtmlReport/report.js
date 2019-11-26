$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactApp.feature");
formatter.feature({
  "line": 1,
  "name": "Contact App",
  "description": "",
  "id": "contact-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 24015881175,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I see the contact permission access popup",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactAppSteps.iSeeTheContactPermissionAccessPopup()"
});
formatter.result({
  "duration": 852814272,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "TC_001 Accept permission access",
  "description": "",
  "id": "contact-app;tc-001-accept-permission-access",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I select \"accept\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see \"no contacts\" popup screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "accept",
      "offset": 10
    }
  ],
  "location": "ContactAppSteps.iSelectAcceptOnThePermissionAccessPopup(String)"
});
formatter.result({
  "duration": 159078825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no contacts",
      "offset": 14
    }
  ],
  "location": "ContactAppSteps.iShouldTheHomepage(String)"
});
formatter.result({
  "duration": 1210394837,
  "status": "passed"
});
formatter.after({
  "duration": 4181805401,
  "status": "passed"
});
formatter.before({
  "duration": 24004044916,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I see the contact permission access popup",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactAppSteps.iSeeTheContactPermissionAccessPopup()"
});
formatter.result({
  "duration": 381992692,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "TC_002 Deny permission access",
  "description": "",
  "id": "contact-app;tc-002-deny-permission-access",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I select \"deny\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see \"no permission denied\" popup screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should not have access to the app",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "deny",
      "offset": 10
    }
  ],
  "location": "ContactAppSteps.iSelectAcceptOnThePermissionAccessPopup(String)"
});
formatter.result({
  "duration": 197234359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no permission denied",
      "offset": 14
    }
  ],
  "location": "ContactAppSteps.iShouldTheHomepage(String)"
});
formatter.result({
  "duration": 1147781543,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iShouldNotHaveAccessToTheApp()"
});
formatter.result({
  "duration": 849619261,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertFalse(Assert.java:64)\n\tat org.junit.Assert.assertFalse(Assert.java:74)\n\tat com.test.stepdefinitions.ContactAppSteps.iShouldNotHaveAccessToTheApp(ContactAppSteps.java:95)\n\tat ✽.Then I should not have access to the app(ContactApp.feature:15)\n",
  "status": "failed"
});
formatter.after({
  "duration": 4067942146,
  "status": "passed"
});
formatter.before({
  "duration": 24847686030,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I see the contact permission access popup",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactAppSteps.iSeeTheContactPermissionAccessPopup()"
});
formatter.result({
  "duration": 335996304,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "TC_003 Create contact",
  "description": "",
  "id": "contact-app;tc-003-create-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I select \"accept\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select OK no the contacts popup screen",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select the add contact plus sign",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "i should see coming soon",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "accept",
      "offset": 10
    }
  ],
  "location": "ContactAppSteps.iSelectAcceptOnThePermissionAccessPopup(String)"
});
formatter.result({
  "duration": 232169115,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iSelectOkNoTheContactsPopupScreen()"
});
formatter.result({
  "duration": 1248893716,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iSelectTheAddContactPlusSign()"
});
formatter.result({
  "duration": 703499582,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iShouldSeeComingSoon()"
});
formatter.result({
  "duration": 1293702479,
  "status": "passed"
});
formatter.after({
  "duration": 4471091740,
  "status": "passed"
});
});