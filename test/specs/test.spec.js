import GooglePage from "../pageObjects/google.page";
import GoogleResultAsos from "../pageObjects/google-result-asos.page";
import AsosHomePagePage from "../pageObjects/asosHomePage.page";
import BeltProducts from "../pageObjects/beltProducts.page";
import Item from "../pageObjects/item.page";

describe("Testing Asos Products", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  it("Select a product called belt", async () => {
    await GooglePage.open('https://www.google.com');
    await GooglePage.acceptCookieBtn.click();

    GooglePage.searchKeyword("asos");

    await GoogleResultAsos.asosLink.waitForClickable();
    await GoogleResultAsos.asosLink.click();

    AsosHomePagePage.searchForBeltProducts();
    await expect(await BeltProducts.searchTerm).toHaveText(expect.stringContaining("belt"), {
      ignoreCase: true,
    });
    BeltProducts.selectFirstProduct();
    const itemName = await Item.itemName;
    const expectedItemName = await BeltProducts.firstProductName.getText();


    await expect(itemName).toHaveText(
      expect.stringContaining(expectedItemName)
    );
    await browser.saveScreenshot("/Users/benyaminjameei/Documents/vsCode/AsosAutomation/test/screenshots/final.png")

    
  });
});
