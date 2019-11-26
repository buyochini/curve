package com.test.Configurations;
import org.apache.log4j.xml.DOMConfigurator;
;

public class ContactAppAPIProcessor {

    /*
    *   Get Search response from flickr search endpoint for given search keyword
    */
    public void startLog()  {
        DOMConfigurator.configure(System.getProperty("user.dir") + "/log4j.xml");
        Log.startTestCase("Starting test for ContactApp");
    }
}
