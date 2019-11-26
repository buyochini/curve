package com.test.Configurations;


import cucumber.api.java.After;
import cucumber.api.java.Before;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServerHasNotBeenStartedLocallyException;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;


public class Hooks {

    private static final ThreadLocal<AppiumDriverLocalService> service = new ThreadLocal<>();

    private static final ThreadLocal<AppiumDriver> driver = new ThreadLocal<>();

    public AppiumDriver getDriver() {
        return driver.get();
    }

    public AppiumDriverLocalService getService() {
        return service.get();
    }

    /*
    *   Start Appium Server Programmatically before each scenario
    */
    @Before
    public void startServer() {
        AppiumServiceBuilder appiumServiceBuilder = new AppiumServiceBuilder()
                .withAppiumJS(new File("/usr/local/lib/node_modules/appium/build/lib/main.js"))
                .withIPAddress("127.0.0.1");
        service.set(appiumServiceBuilder.build());
        service.get().start();

        if (service == null || !service.get().isRunning()) {
            throw new AppiumServerHasNotBeenStartedLocallyException("An appium server node is not started!");
        }

        File appDir = new File("src/test/resources/");
        File app = new File(appDir, "app-debug (1).apk.zip");
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "8");
        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "emulator-5554");
        capabilities.setCapability(AndroidMobileCapabilityType.AVD_LAUNCH_TIMEOUT, 500000);
        capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
        capabilities.setCapability("appPackage", "com.donato.contactsapp");
        capabilities.setCapability("appActivity", "com.donato.contactsapp.ui.list.view.ContactListActivity");
        capabilities.setCapability(MobileCapabilityType.APP, app);
        driver.set(new AndroidDriver<AndroidElement>(service.get().getUrl(), capabilities));
        DOMConfigurator.configure(System.getProperty("user.dir") + "/src/test/resources/log4j.xml");
        Log.startTestCase("Starting test for ContactApp");
    }

    /*
    *   Stop Appium Server Programmatically before each scenario
    */
    @After
    public void stopServer() {
        Log.endTestCase();
        if (driver.get() != null) {
            driver.get().quit();
        }
        if (service.get() != null) {
            service.get().stop();
        }
    }
}
