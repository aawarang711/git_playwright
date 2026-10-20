import {Page , test, expect} from '@playwright/test';
import {POManager} from '../PageObject_ts/poManager.ts';

const dataset : any = JSON.parse(JSON.stringify(require('../utils/placeHolderTestDate.json')));

test('@Web end to end test', async ({ page }) => {



    const poManager = new POManager(page, dataset.firstProduct, dataset.requiredProduct);
    const loginPage = poManager.getLoginPage();
    const dashbordPage = poManager.getDashBordPage();
    const cartPage = poManager.getCartPage()
    const paymentPage = poManager.getPaymentPage();
    const thankyouPage = poManager.getThankYouPage()
    const orderSummaryPage = poManager.getOrderSummaryPage();

    await loginPage.goToLoginPage()
    await loginPage.validLogin(dataset.userEmail, dataset.password);
    await dashbordPage.addProductToCart();
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