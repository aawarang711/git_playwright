import {expect, Page, Locator} from '@playwright/test';

export class ThankYouPage {

page :Page;
        thankyouPageHeader : Locator;
        orderId : Locator;
        ordersButton: Locator;

    constructor(page : Page) {
        this.page = page;
        this.thankyouPageHeader = page.getByText('Thankyou for the order.');
        this.orderId = page.locator('.em-spacer-1 label').nth(1);
        this.ordersButton = page.getByRole('listitem').getByRole('button', { name: 'ORDERS' });
    }

    async thankYouPageDisplayed() {
        await expect(this.thankyouPageHeader).toBeVisible();
    }

    async getOrderIdAndCLickOnOrderButton(): Promise<{ orderId: string; extractedOrderId: string }> {
    const orderId = await this.orderId.textContent();
    if (!orderId) {
        throw new Error('Order ID text is empty or not found');
    }
    const extractedOrderId = orderId.split(' ')[2]?.trim();
    if (!extractedOrderId) {
        throw new Error(`Unable to extract order ID from: ${orderId}`);
    }
    console.log(`Extracted order ID is ${extractedOrderId}`);
    await this.ordersButton.click();
    return { orderId, extractedOrderId };
}
}

module.exports = { ThankYouPage };