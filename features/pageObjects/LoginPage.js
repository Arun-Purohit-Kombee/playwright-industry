class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByTestId('email');
        this.loginButton = page.getByTestId('login_button');
        this.otpInput = page.getByTestId('verify_otp_code');
        this.verifyOtpButton = page.getByTestId('verifyOtp_button');
    }

    async login(email, otp) {
        await this.emailInput.fill(email);
        await this.loginButton.click();
        await this.otpInput.fill(otp);
        await this.verifyOtpButton.click();
    }
}

module.exports = LoginPage;