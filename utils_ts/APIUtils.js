
class APIUtils {

    constructor(apiContext, loginPayload) {
        this.loginPayload = loginPayload,
            this.apiContext = apiContext
    }

    async getToken() {
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data: this.loginPayload
            })
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        return token;
    }

    async createOrder(createOrderPayload) {
        const response = {}
        response.token = await this.getToken();

        const createOrder = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
            data: createOrderPayload,
            headers: {
                'Authorization': response.token,
                'Content-type': 'application/json'
            }
        })
        const createOrderJson = await createOrder.json();
        const orderId = createOrderJson.orders[0];
        response.orderId = orderId;
        return response;
    }

    async loginAndGoToEvents(page) {
        await page.goto('https://eventhub.rahulshettyacademy.com/login');
        await page.getByRole('textbox', { name: 'Email' }).fill('aniketplaywright@mail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('Aniket@123');
        await page.getByRole('button', { name: 'Sign In' }).click();    
    }

    async loginAs(page, emailId) {
        await page.goto('https://eventhub.rahulshettyacademy.com/login');
        await page.getByRole('textbox', { name: 'Email' }).fill(emailId);
        await page.getByRole('textbox', { name: 'Password' }).fill('Aniket@123');
        await page.getByRole('button', { name: 'Sign In' }).click();    
    }

}

module.exports = { APIUtils }