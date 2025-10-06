
// class InstitutionalContractorPage {
//     constructor(page) {
//         this.page = page;
//     }

//     async goto() {
//         // Assumes already logged in and on dashboard
//         await this.page.getByRole('link', { name: 'Institutional Contractors' }).click();
//         await this.page.waitForURL(/institutional-contractors/);
//     }

//     async clickButton(buttonText) {
//         const button = this.page.getByTestId('add_new');
//         await button.waitFor({ state: 'visible', timeout: 15000 });
//         await button.click();
//     }

//     async fillContractorDetails(details) {
//         // Wait for the modal/dialog to be visible
//         await this.page.locator('#profileModal').waitFor({ state: 'visible', timeout: 10000 });

//         // Try getByLabel, fallback to getByPlaceholder or getByTestId if needed
//         try {
//             await this.page.getByLabel('First Name').fill(details['First Name']);
//         } catch (e) {
//             try {
//                 await this.page.getByPlaceholder('First Name').fill(details['First Name']);
//             } catch (e2) {
//                 await this.page.getByTestId('first_name').fill(details['First Name']);
//             }
//         }
//         try {
//             await this.page.getByLabel('Last Name').fill(details['Last Name']);
//         } catch (e) {
//             try {
//                 await this.page.getByPlaceholder('Last Name').fill(details['Last Name']);
//             } catch (e2) {
//                 await this.page.getByTestId('last_name').fill(details['Last Name']);
//             }
//         }
//         try {
//             await this.page.getByLabel('Mobile No *').fill(details['Mobile No']);
//         } catch (e) {
//             try {
//                 await this.page.getByPlaceholder('Mobile No').fill(details['Mobile No']);
//             } catch (e2) {
//                 await this.page.getByTestId('mobile_no').fill(details['Mobile No']);
//             }
//         }
//         try {
//             await this.page.getByLabel('Email').fill(details['Email']);
//         } catch (e) {
//             try {
//                 await this.page.getByPlaceholder('Email').fill(details['Email']);
//             } catch (e2) {
//                 await this.page.getByTestId('email').fill(details['Email']);
//             }
//         }
//         // Select Institutional Contractor type if not already selected
//         const instRadio = this.page.getByRole('radio', { name: 'Institutional Contractor' });
//         if (!(await instRadio.isChecked())) {
//             await instRadio.check();
//         }
//         // Sub-Type: select first available (Painting Contractor (IC1))
//         await this.page.getByRole('combobox', { name: /Sub-Type/i }).click();
//         await this.page.getByRole('option', { name: /Painting Contractor \(IC1\)/ }).click();
//     }

//     async selectWorkLocation(location) {
//         // State
//         await this.page.getByRole('combobox', { name: /State/i }).click();
//         await this.page.getByRole('option', { name: location['State'] }).click();
//         // Area
//         await this.page.getByRole('combobox', { name: /Area/i }).click();
//         await this.page.getByRole('option', { name: location['Area'] }).click();
//         // District
//         await this.page.getByRole('combobox', { name: /District/i }).click();
//         await this.page.getByRole('option', { name: location['District'] }).click();
//         // Pincode
//         await this.page.getByRole('combobox', { name: /Pincode/i }).click();
//         await this.page.getByRole('option', { name: location['Pincode'] }).click();
//         // Territory
//         await this.page.getByRole('combobox', { name: /Territory/i }).click();
//         await this.page.getByRole('option', { name: location['Territory'] }).click();
//     }

//     async submitForm() {
//         await this.page.getByTestId('submit_button').click();
//         // Confirm dialog
//         await this.page.getByTestId('confirm_button').click();
//     }

//     async getSuccessMessage() {
//         // Wait for and return the success message
//         const msg = await this.page.locator('text=created successfully').first();
//         await msg.waitFor({ state: 'visible', timeout: 5000 });
//         return msg.textContent();
//     }
// }

// module.exports = InstitutionalContractorPage;


