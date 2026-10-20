const base = require('@playwright/test');
const { request } = require('@playwright/test');
const { APIUtils } = require('./APIUtils.js');
const loginPayload = { userEmail: "aniket111awa@gmail.com", userPassword: "Aniket@123" }
const createOrderPayload = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };

exports.customTest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://rahulshettyacademy.com/client/auth/login');
        await page.getByPlaceholder('email@example.com').fill('aniket111awa@gmail.com');
        await page.getByPlaceholder('enter your passsword').fill('Aniket@123');
        await page.getByRole("button", { name: 'Login' }).click();
        await page.waitForLoadState('networkidle');
        await use(page);
        await context.close();
    },

    createOrder: async ({ }, use) => {
        const apiContext = await request.newContext();
        const apiUtil = new APIUtils(apiContext, loginPayload);
        const response = await apiUtil.createOrder(createOrderPayload);
        await use(response);
        await apiContext.dispose();
    },

    testData : {
        productName : "ADIDAS ORIGINAL"
    }
});
