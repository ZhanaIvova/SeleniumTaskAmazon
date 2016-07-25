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
  "name": "Amazon URL is \"https://www.amazon.co.uk/\"",
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
  "name": "Verify edit screen price is £3.85",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Quantity is 1",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Total price is £3.85",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.co.uk/",
      "offset": 15
    }
  ],
  "location": "NavigateToAmazonTest.givenUrl(String)"
});
formatter.result({
  "duration": 6401101917,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPageCorrect()"
});
formatter.result({
  "duration": 28457535,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.search()"
});
formatter.result({
  "duration": 5277277642,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyFirstItem()"
});
formatter.result({
  "duration": 2134848897,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyBadgeFromSearch()"
});
formatter.result({
  "duration": 39641184,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyType()"
});
formatter.result({
  "duration": 44572687,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPriceFromSearch()"
});
formatter.result({
  "duration": 39604634,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.select()"
});
formatter.result({
  "duration": 1940683145,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTitle()"
});
formatter.result({
  "duration": 60548688,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyBadge()"
});
formatter.result({
  "duration": 21210493,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPrice()"
});
formatter.result({
  "duration": 40418695,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPaperback()"
});
formatter.result({
  "duration": 43552465,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.addedBookToBasket()"
});
formatter.result({
  "duration": 999242367,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyNotificationShown()"
});
formatter.result({
  "duration": 144799752,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.titleIsAddedToBasket()"
});
formatter.result({
  "duration": 40404267,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyOneItemInTheBasket()"
});
formatter.result({
  "duration": 80197748,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.gotoEditBasket()"
});
formatter.result({
  "duration": 1134831263,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyBookShown()"
});
formatter.result({
  "duration": 67053809,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTitleOnEditScreen()"
});
formatter.result({
  "duration": 113333812,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTypeOnEditScreen()"
});
formatter.result({
  "duration": 61285801,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyPriceOnEditScreen()"
});
formatter.result({
  "duration": 147534986,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyQuantity()"
});
formatter.result({
  "duration": 50819063,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToAmazonTest.verifyTotalPrice()"
});
formatter.result({
  "duration": 51590803,
  "status": "passed"
});
});