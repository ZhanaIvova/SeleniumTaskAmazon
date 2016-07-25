package com.seleniumtest.amazon.webdriver;

import java.net.MalformedURLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class WebDriverFactory {
	public static final WebDriver getDriverInstance() {
//		WebDriver driver = null;
//		if (browser.equals("firefox")) {
//			driver = new FirefoxDriver();
//		} else if (browser.equals("chrome")) {
//			driver = new ChromeDriver();
//		} else if (browser.equals("IE")) {
//			driver = new InternetExplorerDriver();
//		}
		
			System.setProperty("webdriver.chrome.driver",
					"D:\\Automation\\UiAutomation\\chrome_driver\\chromedriver.exe");
		return new ChromeDriver();
	}
	

}
