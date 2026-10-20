import {expect, Page, Locator} from '@playwright/test';

export class PaymentPage {

PaymentPageTitle : Locator;
        applyCouponButton : Locator;
        creditCardNo : Locator;
        ccExpMonth : Locator;
        ccExpYear : Locator;
        ccCvvNo : Locator;
        nameOnCC : Locator;
        couponCode : Locator;
        couponAppliedText : Locator;
        autoPopemail : Locator;
        selectCountry : Locator;
        countryIndia : Locator;
        placeOrderButton: Locator;


    constructor(page : Page) {
        this.PaymentPageTitle = page.getByText('Payment Method');
        this.applyCouponButton = page.getByRole('button', { name: 'Apply Coupon' });
        this.creditCardNo = page.locator('.field input').nth(0);
        this.ccExpMonth = page.locator('select').nth(0);
        this.ccExpYear = page.locator('select').nth(1);
        this.ccCvvNo = page.locator('.field input').nth(1);
        this.nameOnCC = page.locator('.field input').nth(2);
        this.couponCode = page.locator('.field input').nth(3);
        this.couponAppliedText = page.locator("text='* Coupon Applied'");
        this.autoPopemail = page.locator("[class*='text-validated']").nth(1);
        this.selectCountry = page.getByPlaceholder('Select Country');
        this.countryIndia = page.getByRole('button', { name: 'India' }).nth(1);
        this.placeOrderButton = page.getByText('PLACE ORDER');
    }

    async paymentPageDisplayed() {
        await expect(this.PaymentPageTitle).toBeVisible();
        await expect(this.applyCouponButton).toBeVisible();
    }

    async addCcDetailsAndApplyCoupon() {
        await this.creditCardNo.fill('');
        await this.creditCardNo.fill('4111111111111111');
        await this.ccExpMonth.selectOption('11');
        await this.ccExpYear.selectOption('29');
        await this.ccCvvNo.fill('269');
        await this.nameOnCC.fill('John Owen');
        await this.couponCode.fill('rahulshettyacademy');
        await this.applyCouponButton.click();
        await this.couponAppliedText.waitFor();
        await expect(this.couponAppliedText).toBeVisible();
    }

    async verifyAutoPopEmail(userEmail : string) {
        const autopopEmail = await this.autoPopemail.inputValue();
        expect(autopopEmail).toEqual(userEmail);
    }

    async selectStateAndPlaceOrder() {
        await this.selectCountry.pressSequentially("Ind", { delay: 150 });
        await this.countryIndia.click();
        await this.placeOrderButton.click();
    }
}

module.exports = {PaymentPage}