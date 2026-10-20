class LoginPage {

    constructor(page) {
        this.page = page;
        this.userEmail = page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.loginButton = page.getByRole("button", { name: 'Login' });
    }

    async goToLoginPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/auth/login');
    }

    async validLogin(userEmail,password) {
        await this.userEmail.fill(userEmail);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage}