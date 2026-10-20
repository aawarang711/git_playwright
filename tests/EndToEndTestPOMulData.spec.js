const { test, expect } = require('@playwright/test');
const {POManager} = require('../PageObject/poManager.js')
const {customTest} = require('../utils/test-base.js');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeHolderTestMulDate.json')));



for (const data of dataset){
test(`end to end test for ${data.requiredProduct}`, async ({ page }) => {

    const poManager = new POManager(page, data.firstProduct, data.requiredProduct);

    const loginPage = poManager.getLoginPage();
    const dashbordPage = poManager.getDashBordPage();
    const cartPage = poManager.getCartPage()
    const paymentPage = poManager.getPaymentPage();
    const thankyouPage = poManager.getThankYouPage()
    const orderSummaryPage = poManager.getOrderSummaryPage();

    await loginPage.goToLoginPage()
    await loginPage.validLogin(data.userEmail, data.password);
    await dashbordPage.addProductToCart();
    await cartPage.goToCart();
    await cartPage.checkOutRequiredProduct(data.requiredProduct);
    await paymentPage.paymentPageDisplayed();
    await paymentPage.addCcDetailsAndApplyCoupon();
    await paymentPage.verifyAutoPopEmail(data.userEmail);
    await paymentPage.selectStateAndPlaceOrder();
    await thankyouPage.thankYouPageDisplayed();
    const Id = await thankyouPage.getOrderIdAndCLickOnOrderButton();
    await orderSummaryPage.orderPageDisplayed();
    await orderSummaryPage.goToOrderSummaryAndVerifyOrderId(Id)
});}

customTest(`end to end test for with custom data fixture`, async ({ page, testData }) => {

    const poManager = new POManager(page, testData.firstProduct, testData.requiredProduct);

    const loginPage = poManager.getLoginPage();
    const dashbordPage = poManager.getDashBordPage();
    const cartPage = poManager.getCartPage()
    const paymentPage = poManager.getPaymentPage();
    const thankyouPage = poManager.getThankYouPage()
    const orderSummaryPage = poManager.getOrderSummaryPage();

    await loginPage.goToLoginPage()
    await loginPage.validLogin(testData.userEmail, testData.password);
    await dashbordPage.addProductToCart();
    await cartPage.goToCart();
    await cartPage.checkOutRequiredProduct(testData.requiredProduct);
    await paymentPage.paymentPageDisplayed();
    await paymentPage.addCcDetailsAndApplyCoupon();
    await paymentPage.verifyAutoPopEmail(testData.userEmail);
    await paymentPage.selectStateAndPlaceOrder();
    await thankyouPage.thankYouPageDisplayed();
    const Id = await thankyouPage.getOrderIdAndCLickOnOrderButton();
    await orderSummaryPage.orderPageDisplayed();
    await orderSummaryPage.goToOrderSummaryAndVerifyOrderId(Id)
})