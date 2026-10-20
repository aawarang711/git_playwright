const { test, expect } = require('@playwright/test');
const { customTest } = require('../utils/Fixtures.js')

customTest('Fixtures Demo', async ({ authenticatedPage, createOrder }) => {
    await authenticatedPage.goto('https://rahulshettyacademy.com/client');
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();




})