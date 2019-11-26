package com.test.screens;

import com.test.Configurations.Hooks;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ContactAppScreen {

    private AppiumDriver driver;

    /*
     *   Search Screen constructor initializes screen elements
     */
    public ContactAppScreen() {
        this.driver = new Hooks().getDriver();
        PageFactory.initElements(new AppiumFieldDecorator(this.driver), this);
    }

    @AndroidFindBy(id = "com.android.packageinstaller:id/permission_allow_button")
    private AndroidElement permissionButtonAllow;

    @AndroidFindBy(id = "com.android.packageinstaller:id/permission_deny_button")
    private AndroidElement permissionButtonDeny;

    @AndroidFindBy(id = "com.donato.contactsapp:id/alertTitle")
    private AndroidElement noContactPop;

    @AndroidFindBy(xpath = "//*[@text='No Permission denied']")
    private AndroidElement permissionDenied;

    @AndroidFindBy(id = "android:id/button1")
    private AndroidElement okButton;

    @AndroidFindBy(id = "com.android.packageinstaller:id/permission_message")
    private AndroidElement permissionPopUp;

    @AndroidFindBy(id = "com.donato.contactsapp:id/fab")
    private AndroidElement createContact;

    @AndroidFindBy(id = "com.donato.contactsapp:id/snackbar_text")
    private AndroidElement comingSoon;

    @AndroidFindBy(xpath = "//*[@text='ContactsApp']")
    private AndroidElement appTitle;

    /*
     *   Wait for Search Screen to display
     */
//    public void waitForSearchScreen() {
//        WebDriverWait webDriverWait = new WebDriverWait(this.driver,10);
//       webDriverWait.until(ExpectedConditions.alertIsPresent());
//    }

    /*
     *   Wait for Popup Screen to display
     */
    public boolean waitForPopUpScreen() {
        return permissionPopUp.isDisplayed();
    }

    /*
     *   Select allow on the permission up
     */
    public void selectAllowButton() {
        permissionButtonAllow.click();
    }

    /*
     *   Select deny on the permission up
     */
    public void selectDenyButton() {
        permissionButtonDeny.click();
    }

    /*
     *   No permission denied popup
     */
    public boolean noPermissionDenied() {
        return permissionDenied.isDisplayed();
    }

    /*
     *   No contact popup
     */
    public boolean noContactPopUp() {
        return noContactPop.isDisplayed();
    }

    /*
     *   Ok Button
     */
    public void selectOkButtonOnTheNoContactPopup() {
        okButton.click();
    }

    /*
     *   Create contact
     */
    public void selectCreateContact() {
        createContact.click();
    }

    /*
     *   Coming soon message
     */
    public void shouldSeeAMessage() {
        comingSoon.isDisplayed();
    }

    /*
     *   App title
     */
    public boolean appTitle() {
        return appTitle.isDisplayed();
    }
}
