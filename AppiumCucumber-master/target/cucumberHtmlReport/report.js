$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactApp.feature");
formatter.feature({
  "line": 1,
  "name": "Contact App",
  "description": "",
  "id": "contact-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6671273418,
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
  "duration": 501623313,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "TC_001 Accept permission access",
  "description": "",
  "id": "contact-app;tc-001-accept-permission-access",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I select \"accept\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 8,
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
  "duration": 498086766,
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
  "duration": 540776408,
  "status": "passed"
});
formatter.after({
  "duration": 969543519,
  "status": "passed"
});
formatter.before({
  "duration": 6969426424,
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
  "duration": 547228792,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "TC_002 Deny permission access",
  "description": "",
  "id": "contact-app;tc-002-deny-permission-access",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I select \"deny\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see \"no permission denied\" popup screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
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
  "duration": 440483941,
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
  "duration": 528258478,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iShouldNotHaveAccessToTheApp()"
});
formatter.result({
  "duration": 10315268158,
  "error_message": "org.openqa.selenium.NoSuchSessionException: A session is either terminated or not started (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Adebayos-MacBook-Pro-3.local\u0027, ip: \u00272a00:23c7:cf08:cf01:6c70:e119:fbdd:2cb3\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{appPackage\u003dcom.donato.contactsapp, app\u003d/Users/adebayomakanjuola/Downloads/AppiumCucumber-master/src/test/resources/app-debug (1).apk.zip, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.donato.contactsapp.ui.list.view.ContactListActivity, avdLaunchTimeout\u003d500000, desired\u003d{appPackage\u003dcom.donato.contactsapp, appActivity\u003dcom.donato.contactsapp.ui.list.view.ContactListActivity, app\u003d/Users/adebayomakanjuola/Downloads/AppiumCucumber-master/src/test/resources/app-debug (1).apk.zip, avdLaunchTimeout\u003d500000, platformVersion\u003d7, platformName\u003dAndroid, deviceName\u003demulator-5554}, platformVersion\u003d7.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86, platformName\u003dAndroid, deviceManufacturer\u003dGoogle}]\nSession ID: 9df477c6-8963-4a67-ba8b-78552af5ef0a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:868)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.changeImplicitlyWaitTimeOut(AppiumElementLocator.java:81)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:112)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:61)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$c0b591f0.isDisplayed(\u003cgenerated\u003e)\n\tat com.test.screens.ContactAppScreen.appTitle(ContactAppScreen.java:119)\n\tat com.test.stepdefinitions.ContactAppSteps.iShouldNotHaveAccessToTheApp(ContactAppSteps.java:89)\n\tat ✽.Then I should not have access to the app(ContactApp.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "duration": 20563523,
  "error_message": "org.openqa.selenium.NoSuchSessionException: A session is either terminated or not started (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Adebayos-MacBook-Pro-3.local\u0027, ip: \u00272a00:23c7:cf08:cf01:6c70:e119:fbdd:2cb3\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{appPackage\u003dcom.donato.contactsapp, app\u003d/Users/adebayomakanjuola/Downloads/AppiumCucumber-master/src/test/resources/app-debug (1).apk.zip, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.donato.contactsapp.ui.list.view.ContactListActivity, avdLaunchTimeout\u003d500000, desired\u003d{appPackage\u003dcom.donato.contactsapp, appActivity\u003dcom.donato.contactsapp.ui.list.view.ContactListActivity, app\u003d/Users/adebayomakanjuola/Downloads/AppiumCucumber-master/src/test/resources/app-debug (1).apk.zip, avdLaunchTimeout\u003d500000, platformVersion\u003d7, platformName\u003dAndroid, deviceName\u003demulator-5554}, platformVersion\u003d7.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86, platformName\u003dAndroid, deviceManufacturer\u003dGoogle}]\nSession ID: 9df477c6-8963-4a67-ba8b-78552af5ef0a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:533)\n\tat com.test.Configurations.Hooks.stopServer(Hooks.java:68)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 6753405996,
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
  "duration": 568131191,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "TC_003 Create contact",
  "description": "",
  "id": "contact-app;tc-003-create-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I select \"accept\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select OK no the contacts popup screen",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select the add contact plus sign",
  "keyword": "And "
});
formatter.step({
  "line": 19,
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
  "duration": 578771852,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iSelectOkNoTheContactsPopupScreen()"
});
formatter.result({
  "duration": 3661221597,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iSelectTheAddContactPlusSign()"
});
formatter.result({
  "duration": 205727328,
  "status": "passed"
});
formatter.match({
  "location": "ContactAppSteps.iShouldSeeComingSoon()"
});
formatter.result({
  "duration": 609037360,
  "status": "passed"
});
formatter.after({
  "duration": 866481947,
  "status": "passed"
});
formatter.before({
  "duration": 5809751854,
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
  "duration": 568254298,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "# Unable to complete implementation as the apk file is not complete"
    }
  ],
  "line": 22,
  "name": "TC_004 View contact",
  "description": "",
  "id": "contact-app;tc-004-view-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I select \"accept\" on the permission access popup",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should be able to view my contact",
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
  "duration": 490513190,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 939001200,
  "status": "passed"
});
formatter.before({
  "duration": 6063373703,
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
  "duration": 509255943,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "# Unable to complete implementation as the apk file is not complete"
    }
  ],
  "line": 27,
  "name": "TC_005 Scroll contact",
  "description": "",
  "id": "contact-app;tc-005-scroll-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I should be able to scroll to a contact not in view",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1097430170,
  "status": "passed"
});
formatter.before({
  "duration": 5752811466,
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
  "duration": 575651272,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 30,
      "value": "# Unable to complete implementation as the apk file is not complete"
    }
  ],
  "line": 31,
  "name": "TC_006 View all contacts",
  "description": "",
  "id": "contact-app;tc-006-view-all-contacts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I get the total amount of contacts",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to view all the contacts",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 901931341,
  "status": "passed"
});
formatter.before({
  "duration": 5750126561,
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
  "duration": 609468517,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "# Unable to complete implementation as the apk file is not complete"
    }
  ],
  "line": 36,
  "name": "TC_007 Verify image uploaded",
  "description": "",
  "id": "contact-app;tc-007-verify-image-uploaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I should \"see\" if an image is uploaded for the contact",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 975564573,
  "status": "passed"
});
formatter.before({
  "duration": 6489411399,
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
  "duration": 577869536,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "# Unable to complete implementation as the apk file is not complete"
    }
  ],
  "line": 40,
  "name": "TC_008 Verify image not uploaded",
  "description": "",
  "id": "contact-app;tc-008-verify-image-not-uploaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I should \"not see\" if an image is uploaded for the contact",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 903620841,
  "status": "passed"
});
});