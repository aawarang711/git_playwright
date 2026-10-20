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

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/69634745c941646b7a8f19d1',
        async route => {

            // const responseBody = await route.fetch();
            // const actualBody = await responseBody.json();
            // console.log(actualBody);

            const response = await page.request.fetch(route.request());
            console.log(response)
            route.fulfill({
                response,
                body: JSON.stringify(fakePayload)
            });
        }
    );

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders');
    await expect(page.getByRole('button', { name: 'Go Back to Cart' })).toBeVisible();
    await expect(page.getByText('You have No Orders to show at')).toBeVisible()
});