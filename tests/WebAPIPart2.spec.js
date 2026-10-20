const { test, expect } = require('@playwright/test');

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://rahulshettyacademy.com/client/auth/login');
    await page.getByPlaceholder('email@example.com').fill('aniket111awa@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Aniket@123');
    await page.getByRole("button", { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'});

})

test('@API end to end test', async ({ browser }) => {
    const context = await browser.newContext({storageState:'state.json'})
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await expect(page.getByText("Automation").first()).toBeVisible();
    await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    const productName = 'ZARA COAT 3';
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: 'Add To Cart' }).click();
    await page.getByRole('listitem').getByRole("button", { name: 'Cart' }).click();
    await page.locator('div li').last().waitFor();
    await expect(page.getByText(productName)).toBeVisible();
    await page.locator("text=Checkout").click();
    await expect(page.getByText('Payment Method')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Apply Coupon' })).toBeVisible();
    await page.locator('.field input').nth(0).fill('');
    await page.locator('.field input').nth(0).fill('4111111111111111');
    await page.locator('select').nth(0).selectOption('11');
    await page.locator('select').nth(1).selectOption('29');
    await page.locator('.field input').nth(1).fill('269');
    await page.locator('.field input').nth(2).fill('John Owen');
    await page.locator('.field input').nth(3).fill('rahulshettyacademy');
    await page.getByRole('button', { name: 'Apply Coupon' }).click();
    await page.locator("text='* Coupon Applied'").waitFor();
    await expect(page.getByText('* Coupon Applied')).toBeVisible();
    const autopopEmail = await page.locator("[class*='text-validated']").nth(1).inputValue();
    expect(autopopEmail).toEqual('aniket111awa@gmail.com');
    await page.getByPlaceholder('Select Country').pressSequentially("Ind", { delay: 150 });
    await page.getByRole('button', { name: 'India' }).nth(1).click();
    await page.getByText('PLACE ORDER').click();
    await expect(page.getByText('Thankyou for the order.')).toBeVisible();
    const orderId = await page.locator('.em-spacer-1 label').nth(1).textContent();
    const extractedOrderId = orderId.split(' ')[2].trim();
    console.log(`extracted order id is ${extractedOrderId}`);
    await page.getByRole('listitem').getByRole('button', { name: 'ORDERS' }).click();
    await expect(page.getByText('Your Orders')).toBeVisible();
    await page.locator('tbody').waitFor();
    await page.locator('tr').filter({ hasText: extractedOrderId }).getByRole('button', { name: 'View' }).click();
    await expect(page.getByText('order summary')).toBeVisible();
    const prderSummeryId = await page.locator('.col-text').textContent();
    expect(orderId.includes(prderSummeryId)).toBeTruthy();
});