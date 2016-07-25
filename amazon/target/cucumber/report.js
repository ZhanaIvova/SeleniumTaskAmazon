$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "First item",
  "description": "",
  "id": "first-item",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate to Amazon",
  "description": "",
  "id": "first-item;navigate-to-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Amazon URL is https://www.amazon.co.uk/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Verify that the page is correct and opened",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Search for Game of Thrones in section books",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that the first items has the title: A Game of Thrones (A Song of Ice and Fire, Book 1)",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify has a \u0027Best Seller\u0027 badge",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify selected type is Paperback",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify price is £3.85",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select Game of Thrones",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Verify the title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify the badge",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the price",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify type is Paperback",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Book is added to basket",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verify the notification is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "The title is Added to Basket",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "There is one item in the basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on edit basket",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "verify the book is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "title on edit screen",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the type of print is Paperback",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify edit screen price is 3.85",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Quantity is 1",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Total price is 3.85",
  "keyword": "And "
});
formatter.match({
  "location": "NavigateToAmazonTest.givenUrl()"
});
formatter.result({
  "duration": 11749414222,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPageCorrect()"
});
formatter.result({
  "duration": 23318268,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.search()"
});
formatter.result({
  "duration": 5092666454,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyFirstItem()"
});
formatter.result({
  "duration": 2157755806,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyBadgeFromSearch()"
});
formatter.result({
  "duration": 52731900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyType()"
});
formatter.result({
  "duration": 43021513,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPriceFromSearch()"
});
formatter.result({
  "duration": 43043635,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.select()"
});
formatter.result({
  "duration": 3197950065,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTitle()"
});
formatter.result({
  "duration": 64139025,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyBadge()"
});
formatter.result({
  "duration": 26854419,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPrice()"
});
formatter.result({
  "duration": 41226985,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPaperback()"
});
formatter.result({
  "duration": 40135585,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.addedBookToBasket()"
});
formatter.result({
  "duration": 3234074015,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyNotificationShown()"
});
formatter.result({
  "duration": 128374236,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.titleIsAddedToBasket()"
});
formatter.result({
  "duration": 38799228,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyOneItemInTheBasket()"
});
formatter.result({
  "duration": 19878,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.gotoEditBasket()"
});
formatter.result({
  "duration": 1115757081,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyBookShown()"
});
formatter.result({
  "duration": 202998595,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTitleOnEditScreen()"
});
formatter.result({
  "duration": 168434475,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTypeOnEditScreen()"
});
formatter.result({
  "duration": 60593897,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPriceOnEditScreen()"
});
formatter.result({
  "duration": 50571542,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyQuantity()"
});
formatter.result({
  "duration": 70391493,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTotalPrice()"
});
formatter.result({
  "duration": 63692397,
  "status": "passed"
});
});