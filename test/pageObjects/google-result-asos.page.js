import BasePage from "./BasePage";

class GoogleResultAsos extends BasePage {
  get asosLink() {
    return $(
      "//*//h3[contains(text(),'ASOS')]/parent::a[contains(@href,'asos.com')]"
    );
  }
}

export default new GoogleResultAsos();