Feature: Yacaboo Search and Cart

    Background: 
        Given User opens Yakaboo homepage

    Scenario: Search results should show at least one card with word "Ukraine"
        When User searches for "Україна"
        Then User should see at least one book in results containing "Україна"

    Scenario: Book should be added to cart after clicking "Купити"
        When User searches for "Україна"
        When User hovers over the first book
        And User adds the first book to cart
        And User opens cart
        Then User should see cart sidebar
        Then User should see book in cart

