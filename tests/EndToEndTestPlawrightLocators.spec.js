const { test, expect } = require('@playwright/test');

test('end to end test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/auth/login');
    // await page.locator('#userEmail').fill('aniket111awa@gmail.com');
    await page.getByPlaceholder('email@example.com').fill('aniket111awa@gmail.com');
    // await page.locator('#userPassword').fill('Aniket@123');
    await page.getByPlaceholder('enter your passsword').fill('Aniket@123');
    // await page.locator('#login').click();
    await page.getByRole("button", { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
    // await expect(page.locator('h3')).toHaveText('Automation');
    await expect(page.getByText("Automation").first()).toBeVisible();
    // await page.locator('.card-body').first().waitFor();
    await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    // const titles = await page.locator('.card-body b').allTextContents();
    // console.log(titles);
    // - - - Zara coat 3 - - -
    const productName = 'ZARA COAT 3';
    // const allProducts = page.locator('.card-body');
    // const count = await allProducts.count();
    // for (let i = 0; i < count; ++i) {
    //     if (await allProducts.nth(i).locator('b').textContent() === productName) {
    //         await allProducts.nth(i).locator('text= Add To Cart').click();
    //         break;
    //     }
    // }
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: 'Add To Cart' }).click();
    // await page.locator('[routerlink*="cart"]').click();
    await page.getByRole('listitem').getByRole("button", { name: 'Cart' }).click();
    // await page.locator('h1:has-text("My Cart")').waitFor();
    // const cartProduct = await page.locator('.cartSection h3').textContent();
    await page.locator('div li').last().waitFor();
    // const cartProduct1 = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    // expect(cartProduct1).toBeTruthy();
    await expect(page.getByText(productName)).toBeVisible();
    // await page.locator('button:has-text("Checkout")').click();
    // await page.getByText('ZARA COAT 3').getByRole("button", { name: 'Checkout' }).click();
    await page.locator("text=Checkout").click();
    await expect(page.getByText('Payment Method')).toBeVisible();
    // await page.locator('button:has-text("Apply Coupon")').waitFor();
    await expect(page.getByRole('button', { name: 'Apply Coupon' })).toBeVisible();
    await page.locator('.field input').nth(0).fill('');
    await page.locator('.field input').nth(0).fill('4111111111111111');
    await page.locator('select').nth(0).selectOption('11');
    await page.locator('select').nth(1).selectOption('29');
    await page.locator('.field input').nth(1).fill('269');
    await page.locator('.field input').nth(2).fill('John Owen');
    await page.locator('.field input').nth(3).fill('rahulshettyacademy');
    // await page.locator('button:has-text("Apply Coupon")').click();
    await page.getByRole('button', { name: 'Apply Coupon' }).click();
    await page.locator("text='* Coupon Applied'").waitFor();
    await expect(page.getByText('* Coupon Applied')).toBeVisible();
    const autopopEmail = await page.locator("[class*='text-validated']").nth(1).inputValue();
    expect(autopopEmail).toEqual('aniket111awa@gmail.com');
    // await page.locator("[class*='text-validated']").nth(2).pressSequentially("Ind", { delay: 150 });
    await page.getByPlaceholder('Select Country').pressSequentially("Ind", { delay: 150 });
    // const dropdown = page.locator('.ta-results');
    // await dropdown.waitFor();
    // const stateCount = await dropdown.locator('button').count();
    // console.log(`state count is ${stateCount}`);
    // for (let i = 0; i < stateCount; ++i) {
    //     if (await dropdown.locator('button').nth(i).textContent() === ' India') {
    //         await dropdown.locator('button').nth(i).click();
    //         break;
    //     }
    // }
    await page.getByRole('button', {name: 'India'}).nth(1).click();
    // await page.locator("[class*='action__submit']").click();
    await page.getByText('PLACE ORDER').click();
    // await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
    await expect(page.getByText('Thankyou for the order.')).toBeVisible();
    const orderId = await page.locator('.em-spacer-1 label').nth(1).textContent();
    // const orderId = await page.getByLabel("|").textContent();
    const extractedOrderId = orderId.split(' ')[2].trim();
    console.log(`extracted order id is ${extractedOrderId}`);
    // await page.locator("button[routerlink*='myorders']").click();
    await page.getByRole('listitem').getByRole('button',{name: 'ORDERS'}).click();
    await expect(page.getByText('Your Orders')).toBeVisible();
    await page.locator('tbody').waitFor();
    // const rows = page.locator('tbody tr');
    // for (let i = 0; i < await rows.count(); ++i) {
    //     const pageOrderID = await rows.nth(i).locator('th').textContent();
    //     console.log(`page order id is ${pageOrderID}`);
    //     if (orderId.includes(pageOrderID)) {
    //         await rows.nth(i).locator('button').first().click();
    //         break;
    //     }
    // }
    await page.locator('tr').filter({hasText: extractedOrderId}).getByRole('button',{name : 'View'}).click();
    // await expect(page.locator('.email-title').nth(0)).toHaveText(' order summary ');
    await expect(page.getByText('order summary')).toBeVisible();
    const prderSummeryId = await page.locator('.col-text').textContent();
    expect(orderId.includes(prderSummeryId)).toBeTruthy();
});