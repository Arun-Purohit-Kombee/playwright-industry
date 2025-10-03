class CmsManagementPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.sideMenuCmsPages = page.getByTestId('side_menu_cms_pages');
        this.submitButton = page.getByTestId('submit_button');
    }

    async navigateToCmsPages() {
        await this.sideMenuCmsPages.click();
        await this.page.waitForURL(/\/cms-pages(?:\/?$)/);
    }

    /**
     * Clicks the view icon for a given page label in the CMS table
     * @param {string} label
     */
    async clickView(label) {
        const row = this.page.locator('tr', { hasText: label });
        await row.first().getByRole('button').nth(0).click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Clicks the edit icon for a given page label in the CMS table
     * @param {string} label
     */
    async clickEdit(label) {
        const row = this.page.locator('tr', { hasText: label });
        await row.first().getByRole('button').nth(1).click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Appends content to TinyMCE editor (iframe) to simulate an update
     * Uses direct DOM evaluation for reliability with TinyMCE
     * @param {string} text
     */
    async appendToEditor(text) {
        const editorFrame = this.page.locator('iframe[title="Rich Text Area"]');
        await editorFrame.waitFor({ state: 'visible' });
        await editorFrame.evaluate((element, value) => {
            element.contentWindow.focus();
            const doc = element.contentDocument;
            const p = doc.createElement('p');
            p.textContent = value;
            doc.body.appendChild(p);
        }, text);
    }

    async submitEdit() {
        await this.submitButton.click();
        await this.page.waitForURL(/\/cms-pages(?:\/?$)/);
    }
}

module.exports = CmsManagementPage;


