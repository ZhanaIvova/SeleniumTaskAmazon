package com.seleniumtest.amazon.webdriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class WebDriverFactory {
	
	
	public static final WebDriver getDriverInstance(String browser) {
		WebDriver driver = null;
		if (browser.equals("firefox")) {
			driver = new FirefoxDriver();
		} else if (browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					"D:\\Automation\\UiAutomation\\chrome_driver\\chromedriver.exe");
			driver = new ChromeDriver();
		} else if (browser.equals("IE")) {
			driver = new InternetExplorerDriver();
		}
		
		return driver;
	}
	

}
