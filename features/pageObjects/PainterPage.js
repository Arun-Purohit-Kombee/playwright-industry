class PainterPage {
    constructor(page) {
        this.page = page;
        this.createButton = page.getByTestId('add_new');
        this.firstNameInput = page.getByTestId('first_name');
        this.lastNameInput = page.getByTestId('last_name');
        this.mobileInput = page.getByTestId('mobile_no');
        this.emailInput = page.getByTestId('email');
        this.painterRadio = page.getByTestId('type_of_user_painter');
        this.contractorMobileInput = page.getByTestId('contractor_mobile_no');
        this.contractorFirstNameInput = page.getByTestId('contractor_name');
        this.contractorLastNameInput = page.getByTestId('contractor_last_name');
        this.submitButton = page.getByTestId('submit_button');
        this.confirmButton = page.getByTestId('confirm_button');
    }

    async fillBasicDetails(details) {
        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
        await this.mobileInput.fill(details.mobile);
        await this.emailInput.fill(details.email);
        await this.painterRadio.click();
        await this.contractorMobileInput.fill(details.contractorMobile);
        await this.contractorFirstNameInput.fill(details.contractorFirst);
        await this.contractorLastNameInput.fill(details.contractorLast);
    }

    async selectLocation(location) {
        // Select State
        await this.page.getByRole('combobox', { name: 'Select State' }).click();
        await this.page.getByRole('option', { name: location.state }).click();

        // Select Area
        await this.page.getByRole('combobox', { name: 'Select Area' }).click();
        await this.page.getByRole('option', { name: location.area }).click();

        // Select District
        await this.page.getByRole('combobox', { name: 'Select District' }).click();
        await this.page.getByRole('option', { name: location.district }).click();

        // Select Pincode
        await this.page.getByRole('combobox', { name: 'Select Pincode' }).click();
        await this.page.getByRole('option', { name: location.pincode }).click();

        // Select Territory
        await this.page.getByRole('combobox', { name: 'Select Territory' }).click();
        await this.page.getByRole('option', { name: location.territory }).click();
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async confirmDetails() {
        await this.confirmButton.click();
    }
}

module.exports = PainterPage;