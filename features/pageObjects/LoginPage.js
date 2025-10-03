class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByTestId('email');
        this.loginButton = page.getByTestId('login_button');
        this.otpInput = page.getByTestId('verify_otp_code');
        this.verifyOtpButton = page.getByTestId('verifyOtp_button');
    }

    async login(email, otp) {
        await this.emailInput.waitFor({ state: 'visible', timeout: 15000 });
        await this.emailInput.fill(email);
        await this.loginButton.click();
        await this.otpInput.waitFor({ state: 'visible', timeout: 30000 });
        await this.otpInput.fill(otp);
        await Promise.all([
            this.verifyOtpButton.click(),
            this.page.waitForURL(/\/dashboard(?:\/?$)/, { timeout:60000 })
        ]);
    }
}

module.exports = LoginPage;