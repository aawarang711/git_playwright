const {test, expect} = require('playwright/test');


// to add fixtures we have to use {} braces, or it will count it as a normal parameter not a fixture
test('First playwright test', async ({browser})=>{
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
const userName = page.locator('#username');
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.locator('#username').fill('rahulshetty');
await page.locator('#password').fill('learning');
await page.locator('#signInBtn').click();
console.log(await page.locator('[style*="block"]').textContent());
await expect(page.locator('[style*="block"]')).toContainText('Incorrect');


await userName.clear();
await userName.fill('rahulshettyacademy');
await page.locator('#password').fill('Learning@830$3mK2');
await page.locator('#signInBtn').click();
console.log(await page.locator('.card-body a').first().textContent());
console.log(await page.locator('.card-body a').nth(1).textContent());
});

//to run only this test, we can use test.only instead of test
test('Without browser fixture playwright test', async ({page})=>{
// if we don't use browser fixture, playwright will automatically create a new browser and page for us so we can directly use page fixture and comment out the below two lines
// const browserContext = await browser.newContext();
// const page = await browserContext.newPage();
await page.goto('https://google.com');
// await expect(page.title()).toContain('Google');
await expect(page).toHaveTitle('Google');
});

test("UI controles", async ({page})=>{
    // page.route('**/*.css', route => route.abort());
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const profession = page.locator('select.form-control');
    page.on('request', request => console.log(request.url()));
    page.on('response', response => console.log(response.url(), response.status()));
    const IAgree = page.locator('#terms');
    const user = page.locator('.customradio').nth(1);
    const documentLink = page.locator('[href*="documents-request"]');
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await profession.selectOption('consult');
    await user.click();
    await page.locator('#okayBtn').click();
    console.log(await user.isChecked());
    await expect(user).toBeChecked();
    await IAgree.click();
    await expect(IAgree).toBeChecked();
    await IAgree.click();

    // below both steps are same, but the first one is more readable and better to use
    expect(await IAgree.isChecked()).toBeFalsy();
    await expect(IAgree).not.toBeChecked(); 
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});

test("Child windows", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const documentLink = page.locator('[href*="documents-request"]');

const [newPage] = await Promise.all([
context.waitForEvent('page'),
documentLink.click()]);
const text = await newPage.locator('.red').textContent();
console.log(text);
const arrayText = text.split('@');
const domain = arrayText[1].split(' ')[0];
console.log(domain);
await page.locator('#username').fill(domain);
//textContent() will return the text of the element, but inputValue() will return the visible text of the element, so if we want to get the visible text of the element, we can use inputValue() instead of textContent()
// console.log(await page.locator('#username').textContent());
console.log(await page.locator('#username').inputValue());
}); 