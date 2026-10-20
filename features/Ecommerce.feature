Feature: Ecommerce validation

    @Regression
    Scenario: Placing the order
        Given a login to Ecommerce application with "aniket111awa@gmail.com" and "Aniket@123"
        When Add "ZARA COAT 3" to Cart
        Then Verify "ZARA COAT 4" is displayed in the Cart
        When Enter valid details and Placed order
        Then Verify order is present in the OrderHistory