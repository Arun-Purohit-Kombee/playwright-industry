class InstitutionalContractorPage {
    constructor(page) {
        this.page = page;
        this.menuInstitutional = page.getByTestId('dashboard_menu_institutional_contractors');
        this.addNewButton = page.getByTestId('add_new');
        this.firstName = page.getByTestId('first_name');
        this.lastName = page.getByTestId('last_name');
        this.mobileNo = page.getByTestId('mobile_no');
        this.email = page.getByTestId('email');
        this.birthday = page.getByTestId('birthday');
        this.typeInstitutional = page.getByTestId('type_of_user_institutional_contractor');
        this.subTypeCombo = page.getByRole('combobox').nth(0);
        this.subTypeSearch = page.getByRole('searchbox').first();
        this.anniversary = page.getByTestId('anniversary');
        this.territoryCombo = page.getByRole('combobox', { name: 'Select Territory' });
        this.submitButton = page.getByTestId('submit_button');
        this.confirmButton = page.getByTestId('confirm_button');
        this.skipNext = page.getByTestId('skip_next');
        this.finish = page.getByTestId('skip_continue');
    }

    async openCreateForm() {
        await this.menuInstitutional.click();
        await this.addNewButton.click();
    }

    async fillProfileDetails(profile) {
        await this.firstName.fill(profile.firstName);
        await this.lastName.fill(profile.lastName);
        await this.mobileNo.fill(profile.mobile);
        await this.email.fill(profile.email);
        await this.typeInstitutional.click();
        await this.subTypeCombo.click();
        await this.page.getByRole('option', { name: profile.subType }).click();
        await this.birthday.click();
        await this.page.getByLabel(profile.birthdayLabel).click();
        await this.territoryCombo.click();
        await this.page.getByRole('option', { name: profile.territory }).click();
        await this.submitButton.click();
        await this.confirmButton.click();
    }

    async skipToFinish() {
        await this.skipNext.click();
        await this.skipNext.click();
        await this.finish.click();
    }
}

module.exports = InstitutionalContractorPage;


