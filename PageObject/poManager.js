
const {LoginPage} = require('./loginPage.js')
const {DashbordPage} = require('./dashbordPage.js');
const {CartPage} = require('./cartPage.js')
const {PaymentPage} = require('./paymentPage.js');
const {ThankYouPage} = require('./thankyouPage.js');
const {OrderSummaryPage} = require('./orderSummaryPage.js');

class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.DashbordPage = new DashbordPage(this.page);
        this.CartPage = new CartPage(this.page);
        this.PaymentPage = new PaymentPage(this.page);
        this.ThankYouPage = new ThankYouPage(this.page);
        this.OrderSummaryPage = new OrderSummaryPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashBordPage(){
        return this.DashbordPage;
    }

    getCartPage (){
        return this.CartPage;
    }

    getPaymentPage (){
        return this.PaymentPage;
    }

    getThankYouPage (){
        return this.ThankYouPage;
    }

    getOrderSummaryPage (){
        return this.OrderSummaryPage;
    }
}

module.exports = {POManager}