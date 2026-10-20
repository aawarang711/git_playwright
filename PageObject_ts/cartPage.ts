import {expect, Page, Locator} from '@playwright/test';

export class CartPage {
    page: Page;
    cartButton : Locator;
    lastLi : Locator;
    checkOut : Locator;

    constructor(page : Page) {
        this.page = page;
        this.cartButton = page.getByRole('listitem').getByRole("button", { name: 'Cart' });
        this.lastLi = page.locator('div li').last();
        this.checkOut = page.locator("text=Checkout");
    }

    async goToCart() {
        await this.cartButton.click();
    }

    async checkOutRequiredProduct(requiredProduct : string) {
        await this.lastLi.waitFor();
        await expect(this.page.getByText(requiredProduct)).toBeVisible();
        await this.checkOut.click();
    }
}

module.exports = { CartPage }