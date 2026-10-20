const { test, request, expect } = require('@playwright/test');
const {APIUtils}=require('../utils/APIUtils.js');
const emailYahoo = 'aniketyahoo@yahoo.com';
const emailGmail = 'aniketGmail@gmail.com';
const passWord = 'Aniket@123';
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

const API_URL = BASE_URL + '/api';

test("Cross-User Booking Access Denied", async ({ page }) => {
    const apiCintext = await request.newContext();
    const loginRes = await apiCintext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", {
        data : {
            "email": emailYahoo,
            "password": passWord
        }
    })
    
    expect(loginRes.ok()).toBeTruthy();
    const loginResjson = await loginRes.json();
    const token = loginResjson.token;

    const eventRes = await apiCintext.get("https://api.eventhub.rahulshettyacademy.com/api/events", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    expect(eventRes.ok()).toBeTruthy();
    const eventResJson = await eventRes.json();
    const eventId = eventResJson.data[0].id;

    const BookingRes = await apiCintext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "eventId": eventId,
            "customerName": "Yahoo email",
            "customerEmail": emailYahoo,
            "customerPhone": "+91-9898989898",
            "quantity": 1
        }
    })
    expect(BookingRes.ok()).toBeTruthy();
    const BookingResJson = await BookingRes.json();
    const yahooBookingId = BookingResJson.data.id;
    const apiUtils = new APIUtils();
    await apiUtils.loginAs(page, emailGmail)
    await page.waitForLoadState('networkidle');
    await page.goto(`https://eventhub.rahulshettyacademy.com/bookings/${yahooBookingId}`);
    await expect (page.locator("text=/Access Denied/")).toBeVisible();
    await expect (page.locator("text=You are not authorized to view this booking")).toBeVisible();

})

