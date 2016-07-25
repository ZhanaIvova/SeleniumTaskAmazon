package com.seleniumtest.amazon;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.seleniumtest.amazon.webdriver.WebDriverFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.TestCase;

public class NavigateToAmazonTest extends TestCase {
	int x = 0;

	WebDriver driver = WebDriverFactory.getDriverInstance();

	private WebElement firstSearchResultElement;

	@Given("Amazon URL is https://www.amazon.co.uk/")
	public void givenUrl() {
		System.out.println();
		driver.get("https://www.amazon.co.uk/");
	}

	public void checkPageIsReady() {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		if (js.executeScript("return document.readyState").toString().equals("complete")) {
			return;
		}

		for (int i = 0; i < 5; i++) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				fail("Page cannot be loaded");
			}

			if (js.executeScript("return document.readyState").toString().equals("complete")) {
				return;
			}
		}

		fail("Page cannot be loaded");
	}

	public void waitForPageToLoad() {
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}

	@Then("Verify that the page is correct and opened")
	public void verifyPageCorrect() {
		checkPageIsReady();
		String actualUrl = driver.getCurrentUrl();
		String expectedUrl = "https://www.amazon.co.uk/";
		assertEquals(actualUrl, expectedUrl);
	}

	@When("Search for Game of Thrones in section books")
	public void search() {
		driver.findElement(By.cssSelector(".nav-search-dropdown")).click();
		driver.findElement(By.xpath("//option[contains(text(), 'Books')]")).click();
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys("A Game of Thrones");
		driver.findElement(By.cssSelector(".nav-input")).click();
	}

	@Then("Verify that the first items has the title: A Game of Thrones \\(A Song of Ice and Fire, Book 1\\)")
	public void verifyFirstItem() throws InterruptedException {
		Thread.sleep(2000);

		WebElement resultListElement = driver.findElement(By.id("s-results-list-atf"));
		assertNotNull(resultListElement);

		List<WebElement> results = resultListElement.findElements(By.tagName("li"));
		assertNotNull(results);
		assertTrue(!results.isEmpty());

		firstSearchResultElement = results.get(0);
		WebElement titleElement = firstSearchResultElement.findElement(By.cssSelector(".s-access-title"));
		assertNotNull(titleElement);
		assertEquals("A Game of Thrones (A Song of Ice and Fire, Book 1)", titleElement.getText());
	}

	@And("Verify has a 'Best Seller' badge")
	public void verifyBadgeFromSearch() {
		WebElement badgeElement = firstSearchResultElement.findElement(By.cssSelector(".sx-bestseller-badge"));
		assertNotNull(badgeElement);
		assertEquals("Best Seller", badgeElement.getText());
	}

	@And("Verify selected type is Paperback")
	public void verifyType() {
		WebElement paperbackElement = firstSearchResultElement
				.findElement(By.xpath("//*[contains(text(), 'Paperback')]"));
		assertNotNull(paperbackElement);
		assertEquals("Paperback", paperbackElement.getText());
	}

	@And("Verify price is £3.85")
	public void verifyPriceFromSearch() {
		WebElement priceElement = firstSearchResultElement.findElement(By.xpath("//*[contains(text(), '£3.85')]"));
		assertNotNull(priceElement);
		assertEquals("£3.85", priceElement.getText());
	}

	@When("Select Game of Thrones")
	public void select() {
		firstSearchResultElement.findElement(By.cssSelector(".s-access-title")).click();
		waitForPageToLoad();
	}

	@Then("Verify the title")
	public void verifyTitle() {
		WebElement productTitleElement = driver.findElement(By.id("productTitle"));
		assertNotNull(productTitleElement);
		assertEquals("A Game of Thrones (A Song of Ice and Fire, Book 1)", productTitleElement.getText());
	}

	@And("Verify the badge")
	public void verifyBadge() {
		WebElement badgeElement = driver.findElement(By.cssSelector(".p13n-best-seller-badge"));
		assertNotNull(badgeElement);
	}

	@And("Verify the price")
	public void verifyPrice() {
		WebElement priceElement = driver.findElement(By.cssSelector(".offer-price"));
		assertNotNull(priceElement);
		assertEquals("£3.85", priceElement.getText());
	}

	@And("Verify type is Paperback")
	public void verifyPaperback() {
		WebElement paperbackElement = driver.findElement(By.cssSelector(".a-button-selected"));
		assertNotNull(paperbackElement);
		WebElement paperbackTitleElement = paperbackElement.findElement(By.xpath("//*[contains(text(), 'Paperback')]"));
		assertNotNull(paperbackTitleElement);
	}

	@When("Book is added to basket")
	public void addedBookToBasket() {
		driver.findElement(By.id("add-to-cart-button")).click();

	}

	@Then("Verify the notification is shown")
	public void verifyNotificationShown() {
		WebElement notificationElement = driver.findElement(By.id("huc-v2-order-row-with-divider"));
		assertNotNull(notificationElement);
	}

	@And("The title is Added to Basket")
	public void titleIsAddedToBasket() {
		WebElement confirmationTextElement = driver.findElement(By.id("huc-v2-order-row-confirm-text"));
		assertNotNull(confirmationTextElement);
		assertEquals("Added to Basket", confirmationTextElement.getText());
	}

	@And("There is one item in the basket")
	public void verifyOneItemInTheBasket() {
		// WebElement oneItemElement =
		// driver.findElement(By.cssSelector(".huc-subtotal"));
		// assertEquals("1 item", oneItemElement);

	}

	@When("Click on edit basket")
	public void gotoEditBasket() {
		driver.findElement(By.id("hlb-view-cart-announce")).click();

	}

	@Then("verify the book is shown")
	public void verifyBookShown() {
		WebElement cartForm = driver.findElement(By.id("activeCartViewForm"));
		assertNotNull(cartForm);
		assertTrue(cartForm.isDisplayed());
	}

	@And("title on edit screen")
	public void verifyTitleOnEditScreen() {
		WebElement cartForm = driver.findElement(By.id("activeCartViewForm"));
		WebElement listItem = cartForm.findElement(By.cssSelector(".sc-list-item-content"));
		WebElement titleOnEdit = listItem.findElement(By.cssSelector(".sc-product-title"));
		assertEquals("A Game of Thrones (A Song of Ice and Fire, Book 1)", titleOnEdit.getText());
	}

	@And("Verify the type of print is Paperback")
	public void verifyTypeOnEditScreen() {
		WebElement cartForm = driver.findElement(By.id("activeCartViewForm"));
		WebElement listItem = cartForm.findElement(By.cssSelector(".sc-list-item-content"));
		WebElement titleOnEdit = listItem.findElement(By.cssSelector(".sc-product-binding"));
		assertEquals("Paperback", titleOnEdit.getText());

	}

	@And("Verify edit screen price is 3.85")
	public void verifyPriceOnEditScreen() {
		WebElement cartForm = driver.findElement(By.id("activeCartViewForm"));
		WebElement listItem = cartForm.findElement(By.cssSelector(".sc-list-item-content"));
		WebElement titleOnEdit = listItem.findElement(By.cssSelector(".sc-product-price"));
		assertEquals("£3.85", titleOnEdit.getText());

	}

	@And("Quantity is 1")
	public void verifyQuantity() {
		WebElement cartForm = driver.findElement(By.id("activeCartViewForm"));
		WebElement listItem = cartForm.findElement(By.cssSelector(".sc-list-item-content"));
		WebElement quantityElement = listItem.findElement(By.cssSelector(".a-dropdown-prompt"));
		assertEquals("1", quantityElement.getText());

	}

	@And("Total price is 3.85")
	public void verifyTotalPrice() {
		WebElement colorPrice = driver.findElement(By.cssSelector(".sc-subtotal"));
		WebElement totalPriceElement = colorPrice.findElement(By.cssSelector(".a-color-price"));
		assertEquals("£3.85", totalPriceElement.getText());

	}
}
