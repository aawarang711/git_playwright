import {Page, Locator} from '@playwright/test';

export class LoginPage {
    page : Page;
    userEmail : Locator;
    password : Locator;
    loginButton : Locator;
    constructor(page : Page) {
        this.page = page;
        this.userEmail = page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.loginButton = page.getByRole("button", { name: 'Login' });
    }

    async goToLoginPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/auth/login');
    }

    async validLogin(userEmail: string,password: string) {
        await this.userEmail.fill(userEmail);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage}