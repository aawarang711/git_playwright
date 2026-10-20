import {expect, Page, Locator} from '@playwright/test';
export class DashbordPage {
        page : Page;
        pageHeader :Locator;
        firstProductName :Locator;
        requiredProductName: Locator;

    constructor(page: Page, firstProduct:string, requiredProduct:string) {
        this.page = page;
        this.pageHeader = page.getByText("Automation").first();
        this.firstProductName = page.getByText(firstProduct);
        this.requiredProductName = page.locator(".card-body").filter({ hasText: requiredProduct })
    }

    async addProductToCart() {
        await expect(this.pageHeader).toBeVisible();
        await expect(this.firstProductName).toBeVisible();
        await this.requiredProductName.getByRole("button", { name: 'Add To Cart' }).click();
    }
}

module.exports = { DashbordPage }