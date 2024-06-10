class AsosSearchComp {

    get searchTextField() {
        return $("#chrome-search");
    }

    get searchTerm() {
        return $("#search-term-banner p.searchTerm_Fp6B1");
    }

    async searchForSpecificProduct (item) {
        await this.searchTextField.waitForExist();
        await this.searchTextField.setValue(`${item}`);
        await browser.keys("Enter");
    }


}

export default new AsosSearchComp();