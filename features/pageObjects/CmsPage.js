class CmsPage {
    
    constructor(page) {
        this.page = page;
        this.sideMenuCmsPages = page.getByTestId('side_menu_cms_pages');
        this.submitButton = page.getByTestId('submit_button');
    }

    async navigateToCmsPages() {
        await this.sideMenuCmsPages.click();
        await this.page.waitForURL(/\/cms-pages(?:\/?$)/);
    }

    async clickView(label) {
        const row = this.page.locator('tr', { hasText: label });
        await row.first().getByRole('button').nth(0).click();
        await this.page.waitForLoadState('domcontentloaded');
    }


    async clickEdit(label) {
        const row = this.page.locator('tr', { hasText: label });
        await row.first().getByRole('button').nth(1).click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    
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

export default CmsPage;


