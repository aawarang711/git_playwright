const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');

const loginPayload = { userEmail: "aniket111awa@gmail.com", userPassword: "Aniket@123" }
const createOrderPayload = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };
const fakePayload = { data: [], message: "No orders" };

let response;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtil = new APIUtils(apiContext, loginPayload);
    response = await apiUtil.createOrder(createOrderPayload);
});

test('APT testing', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        async route => {route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6ac7e06a2be7a4bc2b95b111'})
        }
    );
    await page.goto('https://rahulshettyacademy.com/client');
    await page.getByRole("button", {name: 'ORDERS'}).click();
    await page.locator("button:has-text('View')").first().click();
    await expect(page.getByText('You are not authorize to view this order')).toBeVisible()
});