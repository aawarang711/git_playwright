const { expect } = require('@playwright/test')

class OrderSummaryPage {
    constructor(page) {
        this.ordersHeader = page.getByText('Your Orders');
        this.orderBody = page.locator('tbody');
        this.orderRow = page.locator('tr');
        this.orderSummary = page.getByText('order summary');
        this.productId = page.locator('.col-text');
    }

    async orderPageDisplayed() {
        await expect(this.ordersHeader).toBeVisible();
        await this.orderBody.waitFor();
    }

    async goToOrderSummaryAndVerifyOrderId(id) {
        await this.orderRow.filter({ hasText: id.extractedOrderId }).getByRole('button', { name: 'View' }).click();
        await expect(this.orderSummary).toBeVisible();
        const prderSummeryId = await this.productId.textContent();
        expect(id.orderId.includes(prderSummeryId)).toBeTruthy();
    }
}

module.exports = {OrderSummaryPage}