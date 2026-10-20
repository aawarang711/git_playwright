const {expect} = require('@playwright/test')
class DashbordPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.getByText("Automation").first();
    }

    async addProductToCart(requiredProduct ) {
        const requiredProductName = this.page.locator(".card-body").filter({ hasText: requiredProduct })
        await expect(this.pageHeader).toBeVisible();
        await requiredProductName.getByRole("button", { name: 'Add To Cart' }).click();
    }
}

module.exports = { DashbordPage }