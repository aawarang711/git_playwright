const { expect } = require('@playwright/test')

class ThankYouPage {
    constructor(page) {
        this.page = page;
        this.thankyouPageHeader = page.getByText('Thankyou for the order.');
        this.orderId = page.locator('.em-spacer-1 label').nth(1);
        this.ordersButton = page.getByRole('listitem').getByRole('button', { name: 'ORDERS' });
    }

    async thankYouPageDisplayed() {
        await expect(this.thankyouPageHeader).toBeVisible();
    }

    async getOrderIdAndCLickOnOrderButton() {
        const orderId = await this.orderId.textContent();
        const extractedOrderId = orderId.split(' ')[2].trim();
        console.log(`extracted order id is ${extractedOrderId}`);
        await this.ordersButton.click();
        return {orderId,extractedOrderId};
    }
}

module.exports = { ThankYouPage };