const {test, expect} = require('playwright/test');

test('@Web Client login', async ({page})=>{
await page.goto('https://rahulshettyacademy.com/client/auth/login');
await page.locator('#userEmail').fill('aniket111awa@gmail.com');
await page.locator('#userPassword').fill('Aniket@123');
await page.locator('#login').click();
// console.log(await page.locator('.card-body b').first().textContent());
// if we comment out the below line, playwright will not wait for the page to load and will throw an error as it will not find the element on the page
//networkidle is flaky, so we can use load instead of networkidle, but it will take more time to load the page
// await page.waitForLoadState('networkidle');
// below waitFor() need 1 of 1 locator otherwise it will throw an error, so adding .first() will solve the issue
await page.locator('.card-body').first().waitFor();
const products = await page.locator('.card-body').allTextContents();
console.log(products);
});