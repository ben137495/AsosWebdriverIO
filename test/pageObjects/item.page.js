import BasePage from "./BasePage";

class Item extends BasePage {

    get itemName() {
        return $("#pdp-react-critical-app span h1");
    }


}


export default new Item();