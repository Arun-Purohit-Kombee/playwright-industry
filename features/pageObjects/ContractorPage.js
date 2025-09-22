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

        // List filters
        this.registrationDateInput = page.getByTestId('created_at');
        this.resetFilterButton = page.getByRole('button', { name: 'Reset Filter' });
        this.table = page.locator('table');
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

    // Listing helpers
    async openList() {
        await this.goToContractors();
        await this.table.first().waitFor();
    }

    async setRegistrationDateRange(startIsoDate, endIsoDate) {
        // startIsoDate/endIsoDate in format YYYY-MM-DD
        const start = new Date(startIsoDate);
        const end = new Date(endIsoDate);
        const startLabel = this.#formatCalendarAriaLabel(start);
        const endLabel = this.#formatCalendarAriaLabel(end);

        await this.registrationDateInput.click();
        await this.page.getByLabel(startLabel, { exact: false }).click();
        await this.page.getByLabel(endLabel, { exact: false }).click();
    }

    async submitFilters() {
        await this.submitButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async getRegistrationDatesFromTable() {
        // Select the Registration Date cell which is the second last cell in each data row
        const cells = this.page.locator('table tbody tr td:nth-last-child(2)');
        const texts = await cells.allTextContents();
        return texts
            .map(t => t && t.trim())
            .filter(Boolean)
            .map(this.#parseDisplayedDateTimeToDate);
    }

    #formatCalendarAriaLabel(dateObj) {
        const monthNames = [
            'January','February','March','April','May','June',
            'July','August','September','October','November','December'
        ];
        const month = monthNames[dateObj.getMonth()];
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        // Calendar cells expose labels like "September 19, 2025"
        return `${month} ${day}, ${year}`;
    }

    #parseDisplayedDateTimeToDate(text) {
        // Expected format: "19-Sep-2025 11:15 am"
        // Convert to a Date object in local time
        const [datePart, timePart, meridiem] = text.split(/\s+/);
        const [dayStr, monStr, yearStr] = datePart.split('-');
        const day = parseInt(dayStr, 10);
        const monthMap = {
            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
        };
        const month = monthMap[monStr];
        const year = parseInt(yearStr, 10);

        let [hourStr, minuteStr] = timePart.split(':');
        let hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);
        const isPM = (meridiem || '').toLowerCase().startsWith('p');
        if (isPM && hour < 12) hour += 12;
        if (!isPM && hour === 12) hour = 0;

        return new Date(year, month, day, hour, minute, 0, 0);
    }
}

module.exports = ContractorPage;


