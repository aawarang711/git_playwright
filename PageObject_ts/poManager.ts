import { Page } from '@playwright/test';
import { LoginPage } from './loginPage.js';
import { DashbordPage } from './dashbordPage.js';
import { CartPage } from './cartPage.js';
import { PaymentPage } from './paymentPage.js';
import { ThankYouPage } from './thankyouPage.js';
import { OrderSummaryPage } from './orderSummaryPage.js';

export class POManager {

    page: Page;
    loginPage: LoginPage;
    dashbordPage: DashbordPage;
    cartPage: CartPage;
    paymentPage: PaymentPage;
    thankYouPage: ThankYouPage;
    orderSummaryPage: OrderSummaryPage;


    constructor(page: Page, firstProduct : string, requiredProduct: string) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashbordPage = new DashbordPage(this.page, firstProduct, requiredProduct);
        this.cartPage = new CartPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.thankYouPage = new ThankYouPage(this.page);
        this.orderSummaryPage = new OrderSummaryPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashBordPage() {
        return this.dashbordPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getPaymentPage() {
        return this.paymentPage;
    }

    getThankYouPage() {
        return this.thankYouPage;
    }

    getOrderSummaryPage() {
        return this.orderSummaryPage;
    }
}

module.exports = { POManager }