package com.test.stepdefinitions;

import com.test.Configurations.Log;
import com.test.screens.ContactAppScreen;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ContactAppSteps {

    ContactAppScreen contactAppScreen;

    @Given("^I see the contact permission access popup$")
    public void iSeeTheContactPermissionAccessPopup() throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            contactAppScreen.waitForPopUpScreen();
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }

    @When("^I select \"([^\"]*)\" on the permission access popup$")
    public void iSelectAcceptOnThePermissionAccessPopup(String permission) throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            if (permission.equals("accept")) {
                contactAppScreen.selectAllowButton();
            } else {
                contactAppScreen.selectDenyButton();
            }
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }

    @Then("^I should see \"([^\"]*)\" popup screen$")
    public void iShouldTheHomepage(String screen) throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            if (screen.equals("no contacts")) {
                Assert.assertTrue(contactAppScreen.noContactPopUp());
            } else {
                Assert.assertTrue(contactAppScreen.noPermissionDenied());
            }
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }

    @And("^I select OK no the contacts popup screen$")
    public void iSelectOkNoTheContactsPopupScreen() throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            contactAppScreen.selectOkButtonOnTheNoContactPopup();
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }

    @When("^I select the add contact plus sign$")
    public void iSelectTheAddContactPlusSign() throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            contactAppScreen.selectCreateContact();
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }

    @Then("^i should see coming soon$")
    public void iShouldSeeComingSoon() throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            contactAppScreen.shouldSeeAMessage();
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }

    @Then("^I should not have access to the app$")
    public void iShouldNotHaveAccessToTheApp() throws Exception {
        try {
            contactAppScreen = new ContactAppScreen();
            contactAppScreen.selectOkButtonOnTheNoContactPopup();
            Assert.assertFalse(contactAppScreen.appTitle());
        } catch (Exception e) {
            Log.error(e.getMessage());
            throw (e);
        }
    }
}
