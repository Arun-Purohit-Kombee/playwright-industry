class ContractorPage {
    constructor(page) {
        this.page = page;
        this.menuContractors = page.getByTestId('dashboard_menu_contractors');
        this.createButton = page.getByTestId('add_new');

        // Basic details
        this.firstNameInput = page.getByTestId('first_name');
        this.lastNameInput = page.getByTestId('last_name');
        this.mobileInput = page.getByTestId('mobile_no');
        this.emailInput = page.getByTestId('email');

        // Institutional toggle/radio if applicable
        this.contractorTypeInstitutional = page.getByTestId('contractor_type_institutional');
        this.contractorTypeRetail = page.getByTestId('contractor_type_retail');

        // Organization details for institutional
        this.organizationNameInput = page.getByTestId('organization_name');
        this.organizationTypeCombobox = page.getByRole('combobox', { name: 'Select Organization Type' });

        // Location comboboxes
        this.stateCombobox = page.getByRole('combobox', { name: 'Select State' });
        this.areaCombobox = page.getByRole('combobox', { name: 'Select Area' });
        this.districtCombobox = page.getByRole('combobox', { name: 'Select District' });
        this.pincodeCombobox = page.getByRole('combobox', { name: 'Select Pincode' });
        this.territoryCombobox = page.getByRole('combobox', { name: 'Select Territory' });

        // Submission
        this.submitButton = page.getByTestId('submit_button');
        this.confirmButton = page.getByTestId('confirm_button');
        this.successToast = page.getByText('The profile details have been created successfully');
    }

    async goToContractors() {
        await this.menuContractors.click();
        await this.page.waitForURL(/.*\/contractors/);
    }

    async openCreateForm() {
        await this.createButton.click();
        await this.page.waitForURL(/.*\/contractors\/create/);
    }

    async fillBasicDetails(details) {
        if (details.firstName) await this.firstNameInput.fill(details.firstName);
        if (details.lastName) await this.lastNameInput.fill(details.lastName);
        if (details.mobile) await this.mobileInput.fill(details.mobile);
        if (details.email) await this.emailInput.fill(details.email);
    }

    async chooseContractorType(type) {
        if (!type) return;
        const normalized = String(type).toLowerCase();
        if (normalized.includes('institution')) {
            await this.contractorTypeInstitutional.click();
        } else {
            await this.contractorTypeRetail.click();
        }
    }

    async fillInstitutionalDetails(inst) {
        if (!inst) return;
        if (inst.organizationName) {
            await this.organizationNameInput.fill(inst.organizationName);
        }
        if (inst.organizationType) {
            await this.organizationTypeCombobox.click();
            await this.page.getByRole('option', { name: inst.organizationType }).click();
        }
    }

    async selectLocation(location) {
        if (location.state) {
            await this.stateCombobox.click();
            await this.page.getByRole('option', { name: location.state }).click();
        }
        if (location.area) {
            await this.areaCombobox.click();
            await this.page.getByRole('option', { name: location.area }).click();
        }
        if (location.district) {
            await this.districtCombobox.click();
            await this.page.getByRole('option', { name: location.district }).click();
        }
        if (location.pincode) {
            await this.pincodeCombobox.click();
            await this.page.getByRole('option', { name: location.pincode }).click();
        }
        if (location.territory) {
            await this.territoryCombobox.click();
            await this.page.getByRole('option', { name: location.territory }).click();
        }
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async confirmDetails() {
        await this.confirmButton.click();
    }

    async isSuccessVisible() {
        await this.successToast.waitFor({ state: 'visible' });
    }
}

module.exports = ContractorPage;


