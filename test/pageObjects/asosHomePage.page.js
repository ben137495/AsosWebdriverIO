import BasePage from "./BasePage";
import AsosCookies from "./components/asosCookies.comp";
import AsosSearch from "./components/asosSearch.comp"



class AsosHomePage extends BasePage {

    get cookies () {
        return AsosCookies;
    }
    get search() {
        return AsosSearch;
    }

    async searchForBeltProducts() {
        await this.cookies.acceptCookieBtn.waitForExist()
        await this.cookies.acceptCookieBtn.waitForClickable()
        await this.cookies.acceptCookieBtn.click();
        this.search.searchForSpecificProduct('belt')
    }
}

export default new AsosHomePage();