const base = require('@playwright/test');


exports.customTest = base.test.extend(
    {
        testData: {
            userEmail: "aniket111awa@gmail.com",
            password: "Aniket@123",
            firstProduct: "ADIDAS ORIGINAL",
            requiredProduct: "ZARA COAT 3"
        }
    }
)