const {test,  expect} = require('@playwright/test')


const BASE_URL      = 'https://eventhub.rahulshettyacademy.com'
// ── Credentials ────────────────────────────────────────────────────────────────
const USER_EMAIL    = 'aniketplaywright@mail.com';// update email and password with your account
const USER_PASSWORD = 'Aniket@123'; 

async function login(page){
    await page.goto(`${BASE_URL}/login`);
    
      // Located by placeholder
      await page.getByPlaceholder('you@email.com').fill(USER_EMAIL);
    
      // Located by label
      await page.getByLabel('Password').fill(USER_PASSWORD);
    
      // Located by id
      await page.locator('#login-btn').click();
    
      await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}

test('one ticket Eligible for refund', async ({page})=>{
    await login(page);

//     Step 2 — Book first event with 1 ticket (default)

// - Navigate to /events


await page.goto(`${BASE_URL}/events`);

// - Click Book Now on the very first event card (locate data-testid="event-card" → first → data-testid="book-now-btn")
await page.locator("#event-card").first().locator("#book-now-btn").click();
// - Fill Full Name, Email (your email), Phone
await page.getByRole('textbox', { name: 'Full Name*' }).fill('XYZ abc');
    await page.getByTestId('customer-email').fill('abc@mail.com');
    await page.getByRole('textbox', { name: 'Phone Number*' }).fill('2222222222');
// - Click confirm button (.confirm-booking-btn)
await page.getByRole('button', { name: 'Confirm Booking' }).click();
// Step 3 — Navigate to booking detail

// - Click View My Bookings link
await page.getByRole('button', { name: 'View My Bookings' }).click();

// - Assert URL is /bookings

const URL =  page.url();
expect(URL.includes('/bookings'));

// - Click the first View Details link

await page.getByRole("button",{name: 'View '})
await page.getByRole("button",{name: 'View Details'}).first().click()

// - Assert: text Booking Information is visible on the page

expect(page.getByText('Booking Information').isVisible());

// Step 4 — Validate booking ref


// - Read booking ref from page
const bookRef = await page.locator("[class*='flex-wrap ']").locator('span').first().innerText();

// - Read event title from h1
const eveTit = await page.locator('h1').first().innerText();

// - Assert validation : "first character of booking ref equals first character of event title"
expect(bookRef.charAt(0)).toBe(eveTit.charAt(0));

// Step 5 — Check refund eligibility

// - Click the Check Refund Eligibility button
await page.getByRole("button",{name: 'Check eligibility for refund?'}).click();
// - Assert: spinner element (#refund-spinner) is immediately visible
 expect(await page.locator('#refund-spinner').isVisible());
// - Assert: spinner is no longer visible within 6 seconds
await expect(page.locator('#refund-spinner')).toBeHidden({ timeout: 6000 });

// Step 6 — Validate result

// - Locate result element by id #refund-result
 const resultElement = page.locator('#refund-result');

// - Assert it is visible
expect(await resultElement.isVisible());
// - Assert it contains text Eligible for refund
const eligibleText = await resultElement.innerText();
expect(eligibleText.includes('Eligible for refund'))
// - Assert it contains text Single-ticket bookings qualify for a full refund
expect(eligibleText.includes('Single-ticket bookings qualify for a full refund.'))
});


test('three ticket Not Eligible for refund', async ({page})=>{
    await login(page);

//     Step 2 — Book first event with 1 ticket (default)

// - Navigate to /events

await page.goto(`${BASE_URL}/events`);

// - Click Book Now on the very first event card (locate data-testid="event-card" → first → data-testid="book-now-btn")
await page.locator("#event-card").first().locator("#book-now-btn").click();

await page.getByRole("button",{name: '+'}).click({clickCount: 2});

// - Fill Full Name, Email (your email), Phone
await page.getByRole('textbox', { name: 'Full Name*' }).fill('XYZ abc');
    await page.getByTestId('customer-email').fill('abc@mail.com');
    await page.getByRole('textbox', { name: 'Phone Number*' }).fill('2222222222');
// - Click confirm button (.confirm-booking-btn)
await page.getByRole('button', { name: 'Confirm Booking' }).click();
// Step 3 — Navigate to booking detail

// - Click View My Bookings link
await page.getByRole('button', { name: 'View My Bookings' }).click();

// - Assert URL is /bookings

const URL =  page.url();
expect(URL.includes('/bookings'));

// - Click the first View Details link

await page.getByRole("button",{name: 'View '})
await page.getByRole("button",{name: 'View Details'}).first().click()

// - Assert: text Booking Information is visible on the page

expect(page.getByText('Booking Information').isVisible());

// Step 4 — Validate booking ref


// - Read booking ref from page
const bookRef = await page.locator("[class*='flex-wrap ']").locator('span').first().innerText();

// - Read event title from h1
const eveTit = await page.locator('h1').first().innerText();

// - Assert validation : "first character of booking ref equals first character of event title"
expect(bookRef.charAt(0)).toBe(eveTit.charAt(0));

// Step 5 — Check refund eligibility

// - Click the Check Refund Eligibility button
await page.getByRole("button",{name: 'Check eligibility for refund?'}).click();
// - Assert: spinner element (#refund-spinner) is immediately visible
 expect(await page.locator('#refund-spinner').isVisible());
// - Assert: spinner is no longer visible within 6 seconds
await expect(page.locator('#refund-spinner')).toBeHidden({ timeout: 6000 });

// Step 6 — Validate result

// - Locate result element by id #refund-result
 const resultElement = page.locator('#refund-result');

// - Assert it is visible
expect(await resultElement.isVisible());
// - Assert it contains text Eligible for refund
const eligibleText = await resultElement.innerText();
expect(eligibleText.includes('Not eligible for refund'))
// - Assert it contains text Single-ticket bookings qualify for a full refund
expect(eligibleText.includes('Group bookings (3 tickets) are non-refundable.'))
});