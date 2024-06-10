import BasePage from "./BasePage";
import AsosSearchComp from "./components/asosSearch.comp";

class BeltProducts extends BasePage {
    get searchTerm() {
        return AsosSearchComp.searchTerm;
    }

    get firstProduct() {   
        return $$(".productTile_U0clN")[0];
    }

    get firstProductName() {
        return $("#pta-product-204689876-0");
    }

    async selectFirstProduct() {
        await this.firstProduct.waitForExist();
        await this.firstProduct.waitForClickable();
        await this.firstProduct.click();
    }

}

export default new BeltProducts();