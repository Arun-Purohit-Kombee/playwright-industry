
class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByTestId('email');
        this.loginButton = page.getByTestId('login_button');
        this.otpInput = page.getByTestId('verify_otp_code');
        this.verifyOtpButton = page.getByTestId('verifyOtp_button');
    }

    async goto() {
        await this.page.goto('https://qa-contractorportal.birlaopus.com/');
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

    async loginAsAdmin() {
        // Use a default admin user and static OTP as per test convention
        await this.login('sparkle.testpainter1@adityabirla.com', '123456');
    }
}

module.exports = LoginPage;