import BasePage from "./BasePage";
import GoogleSearchComponent from "./components/googleSearch.comp";

class GooglePage extends BasePage {
    open(path) {
        return super.open(path); 
    }
    get acceptCookieBtn() {
        // this gets accept cookie button
        return $("#L2AGLb");
    }
    get googleSearchComponent() {
        return GoogleSearchComponent;
    }

    async searchKeyword(keyword) {
        this.googleSearchComponent.searchKeywrod(keyword)
    }

    


}

export default new GooglePage()