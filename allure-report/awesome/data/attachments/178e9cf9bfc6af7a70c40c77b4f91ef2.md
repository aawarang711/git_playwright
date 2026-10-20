# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.js >> @Web end to end test
- Location: tests\EndToEndTest.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[routerlink*="cart"]')
    - locator resolved to <button tabindex="0" _ngcontent-lqq-c38="" class="btn btn-custom" routerlink="/dashboard/cart">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - generic [ref=e11] [cursor=pointer]: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e13] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e14]:
      - listitem [ref=e15] [cursor=pointer]:
        - button " HOME" [ref=e16]:
          - generic [ref=e17]: 
          - text: HOME
      - listitem
      - listitem [ref=e18] [cursor=pointer]:
        - button " ORDERS" [ref=e19]:
          - generic [ref=e20]: 
          - text: ORDERS
      - listitem [ref=e21] [cursor=pointer]:
        - button " Cart 1" [ref=e22]:
          - generic [ref=e23]: 
          - text: Cart
          - generic [ref=e24]: "1"
      - listitem [ref=e25] [cursor=pointer]:
        - button "Sign Out" [ref=e26]:
          - generic [aria-hidden] [ref=e27]: 
          - text: Sign Out
  - button "Filters " [expanded] [ref=e29] [cursor=pointer]:
    - text: Filters
    - generic [ref=e30]: 
  - generic [ref=e31]:
    - paragraph [ref=e32]: Home | Search
    - heading "Filters" [level=4] [ref=e34]
    - generic [ref=e35]:
      - textbox "search" [ref=e37]
      - generic [ref=e38]:
        - heading "Price Range" [level=6] [ref=e39]
        - generic [ref=e40]:
          - textbox "Min Price" [ref=e42]
          - textbox "Max Price" [ref=e44]
      - generic [ref=e45]:
        - heading "Categories" [level=6] [ref=e46]
        - generic [ref=e47]: 
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: fashion
        - generic [ref=e52]:
          - checkbox [ref=e53]
          - generic [ref=e54]: electronics
        - generic [ref=e55]:
          - checkbox [ref=e56]
          - generic [ref=e57]: household
      - generic [ref=e58]:
        - heading "Sub Categories" [level=6] [ref=e59]
        - generic [ref=e60]: 
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: t-shirts
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: shirts
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: shoes
        - generic [ref=e71]:
          - checkbox [ref=e72]
          - generic [ref=e73]: mobiles
        - generic [ref=e74]:
          - checkbox [ref=e75]
          - generic [ref=e76]: laptops
      - generic [ref=e77]:
        - heading "Search For" [level=6] [ref=e78]
        - generic [ref=e79]: 
        - generic [ref=e81]:
          - checkbox [ref=e82]
          - generic [ref=e83]: men
        - generic [ref=e84]:
          - checkbox [ref=e85]
          - generic [ref=e86]: women
  - text:   
  - generic [ref=e87]:
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]: Showing 8 results |
        - generic [ref=e91]: User can only see maximum 9 products on a page
      - generic [ref=e92]:
        - generic [ref=e96]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e97]
          - generic [ref=e98]: $ 11500
          - button "View" [ref=e100] [cursor=pointer]:
            - generic [aria-hidden] [ref=e101]: 
            - text: View
          - button " Add To Cart" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]: 
            - text: Add To Cart
        - generic [ref=e107]:
          - heading "ZARA COAT 3" [level=5] [ref=e108]
          - generic [ref=e109]: $ 11500
          - button "View" [ref=e111] [cursor=pointer]:
            - generic [aria-hidden] [ref=e112]: 
            - text: View
          - button " Add To Cart" [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: 
            - text: Add To Cart
        - generic [ref=e118]:
          - heading "iphone 13 pro" [level=5] [ref=e119]
          - generic [ref=e120]: $ 55000
          - button "View" [ref=e122] [cursor=pointer]:
            - generic [aria-hidden] [ref=e123]: 
            - text: View
          - button " Add To Cart" [ref=e124] [cursor=pointer]:
            - generic [ref=e125]: 
            - text: Add To Cart
        - generic [ref=e129]:
          - heading "qwerty" [level=5] [ref=e130]
          - generic [ref=e131]: $ 10000
          - button "View" [ref=e133] [cursor=pointer]:
            - generic [aria-hidden] [ref=e134]: 
            - text: View
          - button " Add To Cart" [ref=e135] [cursor=pointer]:
            - generic [ref=e136]: 
            - text: Add To Cart
        - generic [ref=e140]:
          - heading "qwerty" [level=5] [ref=e141]
          - generic [ref=e142]: $ 10000
          - button "View" [ref=e144] [cursor=pointer]:
            - generic [aria-hidden] [ref=e145]: 
            - text: View
          - button " Add To Cart" [ref=e146] [cursor=pointer]:
            - generic [ref=e147]: 
            - text: Add To Cart
        - generic [ref=e151]:
          - heading "qwerty" [level=5] [ref=e152]
          - generic [ref=e153]: $ 10000
          - button "View" [ref=e155] [cursor=pointer]:
            - generic [aria-hidden] [ref=e156]: 
            - text: View
          - button " Add To Cart" [ref=e157] [cursor=pointer]:
            - generic [ref=e158]: 
            - text: Add To Cart
        - generic [ref=e162]:
          - heading "qwerty" [level=5] [ref=e163]
          - generic [ref=e164]: $ 10000
          - button "View" [ref=e166] [cursor=pointer]:
            - generic [aria-hidden] [ref=e167]: 
            - text: View
          - button " Add To Cart" [ref=e168] [cursor=pointer]:
            - generic [ref=e169]: 
            - text: Add To Cart
        - generic [ref=e173]:
          - heading "qwerty" [level=5] [ref=e174]
          - generic [ref=e175]: $ 10000
          - button "View" [ref=e177] [cursor=pointer]:
            - generic [aria-hidden] [ref=e178]: 
            - text: View
          - button " Add To Cart" [ref=e179] [cursor=pointer]:
            - generic [ref=e180]: 
            - text: Add To Cart
    - list "Pagination" [ref=e185]:
      - listitem [ref=e186]:
        - text: «
        - generic [ref=e187]:
          - text: Previous
          - generic [ref=e188]: page
      - listitem [ref=e189]:
        - generic [ref=e190]: You're on page
        - text: "1"
      - listitem [ref=e191]:
        - generic [ref=e192]:
          - text: Next
          - generic [ref=e193]: page
        - text: »
  - generic [ref=e194]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('@Web end to end test', async ({ page }) => {
  4  |     await page.goto('https://rahulshettyacademy.com/client/auth/login');
  5  |     await page.locator('#userEmail').fill('aniket111awa@gmail.com');
  6  |     await page.locator('#userPassword').fill('Aniket@123');
  7  |     await page.locator('#login').click();
  8  |     await expect(page.locator('h3')).toHaveText('Automation');
  9  |     await page.waitForLoadState('networkidle');
  10 |     await page.locator('.card-body').first().waitFor();
  11 |     const titles = await page.locator('.card-body b').allTextContents();
  12 |     console.log(titles);
  13 |     //Zara coat 3
  14 |     const productName = 'ZARA COAT 3';
  15 |     const allProducts = page.locator('.card-body');
  16 |     const count = await allProducts.count();
  17 |     for (let i = 0; i < count; ++i) {
  18 |         if (await allProducts.nth(i).locator('b').textContent() === productName) {
  19 |             await allProducts.nth(i).locator('text= Add To Cart').click();
  20 |             break;
  21 |         }
  22 |     }
> 23 |     await page.locator('[routerlink*="cart"]').click();
     |                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |     // await page.locator('h1:has-text("My Cart")').waitFor();
  25 |     // const cartProduct = await page.locator('.cartSection h3').textContent();
  26 |     await page.locator('div li').last().waitFor();
  27 |     const cartProduct1 = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
  28 |     expect(cartProduct1).toBeTruthy();
  29 |     await page.locator('button:has-text("Checkout")').click();
  30 |     await page.locator('button:has-text("Apply Coupon")').waitFor();
  31 |     await page.locator('.field input').nth(0).fill('');
  32 |     await page.locator('.field input').nth(0).fill('4111111111111111');
  33 |     await page.locator('select').nth(0).selectOption('11');
  34 |     await page.locator('select').nth(1).selectOption('29');
  35 |     await page.locator('.field input').nth(1).fill('269');
  36 |     await page.locator('.field input').nth(2).fill('John Owen');
  37 |     await page.locator('.field input').nth(3).fill('rahulshettyacademy');
  38 |     await page.locator('button:has-text("Apply Coupon")').click();
  39 |     await page.locator("text='* Coupon Applied'").waitFor();
  40 |     const autopopEmail = await page.locator("[class*='text-validated']").nth(1).inputValue();
  41 |     expect(autopopEmail).toEqual('aniket111awa@gmail.com');
  42 |     await page.locator("[class*='text-validated']").nth(2).pressSequentially("Ind", { delay: 150 });
  43 |     // await page.pause();
  44 |     const dropdown = page.locator('.ta-results');
  45 |     await dropdown.waitFor();
  46 |     const stateCount = await dropdown.locator('button').count();
  47 |     console.log(`state count is ${stateCount}`);
  48 |     for (let i = 0; i < stateCount; ++i) {
  49 |         if (await dropdown.locator('button').nth(i).textContent() === ' India') {
  50 |             await dropdown.locator('button').nth(i).click();
  51 |             break;
  52 |         }
  53 |     }
  54 |     await page.locator("[class*='action__submit']").click();
  55 |     await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  56 |     const orderId = await page.locator('.em-spacer-1 label').nth(1).textContent();
  57 |     // const extractedOrderId = orderId.split(' ')[2].trim();
  58 |     // console.log(`extracted order id is ${extractedOrderId}`);
  59 |     await page.locator("button[routerlink*='myorders']").click();
  60 |     await page.locator('tbody').waitFor();
  61 |     const rows = page.locator('tbody tr');
  62 |     for (let i = 0; i < await rows.count(); ++i) {
  63 |         const pageOrderID = await rows.nth(i).locator('th').textContent();
  64 |         console.log(`page order id is ${pageOrderID}`);
  65 |         if (orderId.includes(pageOrderID)) {
  66 |             await rows.nth(i).locator('button').first().click();
  67 |             break;
  68 |         }
  69 |     }
  70 |     await expect(page.locator('.email-title').nth(0)).toHaveText(' order summary ');
  71 |     const prderSummeryId = await page.locator('.col-text').textContent();
  72 |     expect(orderId.includes(prderSummeryId)).toBeTruthy();
  73 | });
```