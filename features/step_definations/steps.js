const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test')

const playwright = require('@playwright/test');
const { POManager } = require('../../PageObject/poManager.js')


Given('a login to Ecommerce application with {string} and {string}', { timeout: 10 * 1000 }, async function (userEmail, password) {

    this.userEmail = userEmail;
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goToLoginPage()
    await loginPage.validLogin(this.userEmail, password);

});

When('Add {string} to Cart', { timeout: 10 * 1000 }, async function (productName) {
    const dashbordPage = this.poManager.getDashBordPage();
    this.cartPage = this.poManager.getCartPage();
    await dashbordPage.addProductToCart(productName);
    await this.cartPage.goToCart();
});

Then('Verify {string} is displayed in the Cart', { timeout: 10 * 1000 }, async function (productName) {
    await this.cartPage.checkOutRequiredProduct(productName);
});

When('Enter valid details and Placed order', { timeout: 10 * 1000 }, async function () {
    const paymentPage = this.poManager.getPaymentPage();
    const thankyouPage = this.poManager.getThankYouPage()
    await paymentPage.paymentPageDisplayed();
    await paymentPage.addCcDetailsAndApplyCoupon();
    await paymentPage.verifyAutoPopEmail(this.userEmail);
    await paymentPage.selectStateAndPlaceOrder();
    await thankyouPage.thankYouPageDisplayed();
    this.Id = await thankyouPage.getOrderIdAndCLickOnOrderButton();
});

Then('Verify order is present in the OrderHistory', { timeout: 10 * 1000 }, async function () {

    const orderSummaryPage = this.poManager.getOrderSummaryPage();
    await orderSummaryPage.orderPageDisplayed();
    await orderSummaryPage.goToOrderSummaryAndVerifyOrderId(this.Id)
});

Given('a login to Ecommerce2 application with {string} and {string}', async function (string, string2) {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await this.page.locator('#username').fill('rahulshetty');
    await this.page.locator('#password').fill('learning');
    await this.page.locator('#signInBtn').click();
});

Then('Verify Error message is displayed', async function () {
    console.log(await this.page.locator('[style*="block"]').textContent());
    await expect(this.page.locator('[style*="block"]')).toContainText('Incorrect');
});