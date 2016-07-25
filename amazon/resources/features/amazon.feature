Feature: First item

  Scenario: Navigate to Amazon
    Given Amazon URL is https://www.amazon.co.uk/
    Then Verify that the page is correct and opened
    When Search for Game of Thrones in section books
    Then Verify that the first items has the title: A Game of Thrones (A Song of Ice and Fire, Book 1)
    And Verify has a 'Best Seller' badge
    And Verify selected type is Paperback
    And Verify price is £3.85
    When Select Game of Thrones
    Then Verify the title
    And Verify the badge
    And Verify the price
    And Verify type is Paperback
    When Book is added to basket
    Then Verify the notification is shown
    And The title is Added to Basket
    And There is one item in the basket
    When Click on edit basket
    Then verify the book is shown
    And title on edit screen
    And Verify the type of print is Paperback
    And Verify edit screen price is £3.85
    And Quantity is 1
    And Total price is £3.85