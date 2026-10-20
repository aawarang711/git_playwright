Feature: Error Valifdation

    @Validation
    Scenario: Placing the order
        Given a login to Ecommerce2 application with "aniket111awa@gmail.com" and "Aniket@123"
        Then Verify Error message is displayedF