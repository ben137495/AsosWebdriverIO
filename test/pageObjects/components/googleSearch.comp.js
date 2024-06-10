export class GoogleSearchComponent {
    get googleSearchTF() {
        return $("#APjFqb");
    } 
    async searchKeywrod(keyword) {
        await this.googleSearchTF.setValue(`${keyword}`);
        await browser.keys("Enter");
    }

}

export default new GoogleSearchComponent();