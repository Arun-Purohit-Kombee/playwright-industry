class InstitutionalContractorMCPPage {
    constructor(page) {
        this.page = page;
    }

    async gotoFromDashboard() {
        
        const menu = this.page.getByTestId('dashboard_menu_institutional_contractors');
        await menu.waitFor({ state: 'visible', timeout: 15000 });
        await menu.click();
        await this.page.waitForURL(/institutional[-_ ]?contractors/, { timeout: 15000 });
    }

    async clickAddNew() {
        const btn = this.page.getByTestId('add_new');
        await btn.waitFor({ state: 'visible', timeout: 10000 });
        await btn.click();
    }

    async fillPersonalDetails({ firstName, lastName, mobile, email }) {
        await this.page.getByTestId('first_name').waitFor({ state: 'visible', timeout: 8000 });
        await this.page.getByTestId('first_name').fill(firstName);
        await this.page.getByTestId('last_name').fill(lastName);
        await this.page.getByTestId('mobile_no').fill(mobile);
        await this.page.getByTestId('email').fill(email);
    }

    async chooseInstitutionalType() {
        const radio = this.page.getByTestId('type_of_user_institutional_contractor');
        await radio.waitFor({ state: 'visible', timeout: 5000 });
        if (!(await radio.isChecked())) await radio.check();
    }

    async selectDropdowns({ State, Area, District, Pincode, Territory }) {
        // select by visible option text
        await this._selectComboboxOptionByLabel('State', State);
        await this._selectComboboxOptionByLabel('Area', Area);
        await this._selectComboboxOptionByLabel('District', District);
        await this._selectComboboxOptionByLabel('Pincode', Pincode);
        await this._selectComboboxOptionByLabel('Territory', Territory);
    }

    async _selectComboboxOptionByLabel(label, optionText) {
        const combo = this.page.getByRole('combobox', { name: new RegExp(label, 'i') });
        await combo.waitFor({ state: 'visible', timeout: 6000 });
        await combo.click();
        const option = this.page.getByRole('option', { name: optionText });
        await option.waitFor({ state: 'visible', timeout: 6000 });
        await option.click();
    }

    async submitAndConfirm() {
        const submit = this.page.getByTestId('submit_button');
        await submit.waitFor({ state: 'visible', timeout: 8000 });
        await submit.click();
        const confirm = this.page.getByTestId('confirm_button');
        await confirm.waitFor({ state: 'visible', timeout: 8000 });
        await confirm.click();
    }

    async waitForSuccessToast() {
        const toast = this.page.locator('text=created successfully');
        await toast.waitFor({ state: 'visible', timeout: 10000 });
        return toast.textContent();
    }

    async isContractorListed(email) {
        // Try search input by testid or fallback to text search
        try {
            const search = this.page.getByTestId('contractor_search');
            await search.fill(email);
            await search.press('Enter');
        } catch (e) {
            // ignore
        }
        const row = this.page.locator(`text=${email}`);
        try {
            await row.first().waitFor({ state: 'visible', timeout: 8000 });
            return true;
        } catch (e) {
            return false;
        }
    }
}

module.exports = InstitutionalContractorMCPPage;
