const { expect, request } = require('@playwright/test')
const base = require('@playwright/test')
const loginPayload = { email: "aniketplaywright@mail.com", password: "Aniket@123" }


exports.assignmentTest = base.test.extend({
    goToHomePage: async ({ page }, use) => {
        await page.goto('https://eventhub.rahulshettyacademy.com/login');
        await page.getByRole('textbox', { name: 'Email' }).fill('aniketplaywright@mail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('Aniket@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await expect(page.getByRole('link', { name: 'EventHub' })).toBeVisible();
        // await page.getByRole('link',{name: 'Events'}).click();
        use(page);
    },


    addEvent: async ({ }, use) => {
        const apiContext = await request.newContext();
        const loginResponse = await apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
            {
                data: loginPayload
            })

        const loginResponseJson = await loginResponse.json();
        console.log("Login response body :", loginResponseJson);
        expect(loginResponse.ok()).toBeTruthy();
        const token = loginResponseJson.token;


        const response = await apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/events', {
            data: {
                "title": "Tech 2026 Event added",
                "description": "Technology conference added .",
                "category": "Conference",
                "venue": "Maharashtra International Centre",
                "city": "Maharashtra",
                "eventDate": "2027-06-15T09:00:00.000Z",
                "price": 100,
                "totalSeats": 100,
                "imageUrl": "https://example.com/banner.jpg"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const responseJson = await response.json();
        console.log("Response body:", responseJson);
        expect(response.ok()).toBeTruthy();

        use(response);
    }
})