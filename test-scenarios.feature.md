#### APP

```
Feature: Cleango App Launch

  1. Scenario: Navigating to the home page of Cleango

    Given I am on the phone's home screen
    When I tap on the app icon for Cleango
    Then I should see the "Enable Notifications" page with options

    When I tap on the "More" button
    Then I should be directed to the home page of the app

Feature: Cleango Login/Logout

  1. Scenario: Login to Cleango

    Given I am on the phone's home screen
    When I tap on the app icon for Cleango
    Then I am on the "Hello from Cleango!" screen
    And I should see a Language icon on the top right of the screen
    And I should see fields for phone number
    And I should see a "More" button
    And I should see "By proceeding you accept the Terms of Use and Privacy Policy" footer

    When I provide a valid phone number
    And I tap on the "More" button
    Then I should see the "Confirm phone number" screen
    And I should see the "Enter the code you received in the SMS!" text
    And I should see a field to enter the code
    And I should see a "Didn't receive the code? Resend code!" footer

    When I enter the valid code to the field
    Then I should see the "Enable Notifications" page with options

    When I tap on the "More" button
    Then I should be directed to the home page of the app

  2. Scenario: Logout from Cleango

    Given I am logged in to Cleango
    When I select "My profile" on the footer menu
    Then I should see the "My profile" screen

    When I select the cogwheel icon on the top right of the screen
    Then I should see the "Settings" page

    When I select "Safety"
    Then I should see the "Safety" options screen
    
    When I select "Logout"
    Then I should be logged out from the app
    And I should be on the "Hello from Cleango! screen

Feature: Car Wash Order Process

  1. Scenario: Ordering a Car Wash Successfully

    Given I am logged in to Cleango
    And I am on the Home page
    When I tap on the "Order" button
    Then I should be directed to "Where can we send the washer?" screen

    When I select a valid parking location
    And I confirm the selected location
    Then I should be directed to "Exact position of the vehicle" screen

    When I tap on "Confirm" button
    Then I should be directed to the "Choose vehicle!" screen

    When I choose a vehicle
    And I tap on the "Next" button
    Then I should see the "Choose the type of carwash" screen

    When I select an item on the screen
    And I tap on the "Next" button
    Then I should be directed to the "Choose extras!" screen

    When I tap on the "Next" button
    Then I should see a calendar with selectable dates

    When I select a valid date in the calendar
    Then I should be directed to the "Select a date" screen for the previously selected day

    When I select an exact time slot
    And I tap on "Selection" button
    Then I am directed to the "Checkout" screen
    And I should see a summary of my order

    When I tap on the "Payment&Order" button
    Then I should be directed to the payment process
```

#### BROWSER:

```
Feature: Cleango Registration

  1. Scenario: User registration in Cleango, happy path
    Given I am on the home page of Cleango

    When I enter my "email" and "phone number"
    And I click on the "Register" button
    Then I should be successfully registered and redirected to the "https://cleango.hu/thank-you" URL

  2. Scenario: User registration in Cleango, empty fields
    Given I am on the home page of Cleango

    When I leave "email" and "phone number" fields empty
    And I click on the "Register" button
    Then Registration should not happen
    And an Error message should be shown

  3. Scenario: User registration in Cleango, invalid credentials
    Given I am on the home page of Cleango

    When I fill <Field> with <Invalid credential>
    And I click on the "Register" button
    Then Registration should not happen
    And <Error message> should be shown under the <Field>

    | Field          | Invalid credential  | Error message                                    |
    | E-mail         | "test"              | "A(z) email cím nem érvényes email formátum."    | 
    | Phone number   | "test"              | "A telefonszám mezőnek érvényesnek kell lennie." | 

Feature: Cleango App Download

  1. Scenario: Downloading the app
    Given I am on the home page of Cleango
    When I click on "APP letoltese" button
    Then a popup-window should appear
    And the popup-window should have QR codes and buttons that redirect the user to the download page
```

#### MOBILE BROWSER:

```
Feature: Cleango App Download

1. Scenario: Downloading the app
  Given I am on the home page of Cleango
  When I tap on "APP letoltese" button
  Then I should be directed to the corresponding App store page of Cleango
```