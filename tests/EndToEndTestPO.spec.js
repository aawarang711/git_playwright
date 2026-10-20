const { test, expect } = require('@playwright/test');
const {POManager} = require('../PageObject/poManager.js')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeHolderTestDate.json')));

test('@Web end to end test', async ({ page }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    const dashbordPage = poManager.getDashBordPage();
    const cartPage = poManager.getCartPage()
    const paymentPage = poManager.getPaymentPage();
    const thankyouPage = poManager.getThankYouPage()
    const orderSummaryPage = poManager.getOrderSummaryPage();
    
    await loginPage.goToLoginPage()
    await loginPage.validLogin(dataset.userEmail, dataset.password);
    await dashbordPage.addProductToCart(dataset.requiredProduct);
    await cartPage.goToCart();
    await cartPage.checkOutRequiredProduct(dataset.requiredProduct);
    await paymentPage.paymentPageDisplayed();
    await paymentPage.addCcDetailsAndApplyCoupon();
    await paymentPage.verifyAutoPopEmail(dataset.userEmail);
    await paymentPage.selectStateAndPlaceOrder();
    await thankyouPage.thankYouPageDisplayed();
    const Id = await thankyouPage.getOrderIdAndCLickOnOrderButton();
    await orderSummaryPage.orderPageDisplayed();
    await orderSummaryPage.goToOrderSummaryAndVerifyOrderId(Id)
});