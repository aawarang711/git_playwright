import { expect, Page, Locator } from '@playwright/test';



export class OrderSummaryPage {


    ordersHeader: Locator;
    orderBody: Locator;
    orderRow: Locator;
    orderSummary: Locator;
    productId: Locator;

    constructor(page: Page) {
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
    
    async goToOrderSummaryAndVerifyOrderId(id:{orderId:string,extractedOrderId:string}) {
        await this.orderRow.filter({ hasText: id.extractedOrderId }).getByRole('button', { name: 'View' }).click();
        await expect(this.orderSummary).toBeVisible();
        const prderSummeryId : any = await this.productId.textContent();
        expect(id.orderId.includes(prderSummeryId)).toBeTruthy();
    }
}

module.exports = { OrderSummaryPage }