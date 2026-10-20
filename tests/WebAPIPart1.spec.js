const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');

const loginPayload = { userEmail: "aniket111awa@gmail.com", userPassword: "Aniket@123" }

const createOrderPayload = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };

let response;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtil = new APIUtils(apiContext, loginPayload);
    response = await apiUtil.createOrder(createOrderPayload);


});

test('@API APT testing', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders');
    await expect(page.getByRole('button', { name: 'Go Back to Cart' })).toBeVisible();
    await page.locator('tbody').waitFor();
    const rows = page.locator('tbody tr');
    for (let i = 0; i < await rows.count(); ++i) {
        const pageOrderID = await rows.nth(i).locator('th').textContent();
        console.log(`page order id is ${pageOrderID}`);
        if (response.orderId == pageOrderID) {
            await rows.nth(i).locator('button').first().click();
            break;
        }
    }

    await expect(page.locator('.email-title').nth(0)).toHaveText(' order summary ');
    const prderSummeryId = await page.locator('.col-text').textContent();
    expect(response.orderId.includes(prderSummeryId)).toBeTruthy();
});