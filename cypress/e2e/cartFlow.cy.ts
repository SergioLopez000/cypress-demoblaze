import homePage from "@pages/HomePage";
import productPage from "@pages/ProductPage";
import cartPage from "@pages/CartPage";
import { parsePrice } from "@support/priceUtils";
import products from "@fixtures/products.json";


describe("Demoblaze - add phone and laptop to cart", () => {
    let savedPhoneName: string;
    let savedPhonePrice: string;
    let savedLaptopName: string;
    let savedLaptopPrice: string;
    let expectedTotal: number;

    it("adds a phone and a laptop, and validates cart contents and total price", () => {
        homePage.navigateToDemoBlaze();
        homePage.getElementName(0).then((name) => {
            savedPhoneName = name;
        });
        homePage.getElementPrice(0).then((price) => {
            savedPhonePrice = price;
        });
        homePage.clickElement(0);
        productPage.addProductToCart();
        productPage.goToCart();
        cy.then(() => {
            cartPage.getProductPriceValue(savedPhoneName).should('contain', parsePrice(savedPhonePrice));
        });
        cartPage.goToHome();
        homePage.navigateToCategory(products.laptop.category);
        homePage.getElementName(1).then((name) => {
            savedLaptopName = name;
        });
        homePage.getElementPrice(1).then((price) => {
            savedLaptopPrice = price;
        });
        homePage.clickElement(1);
        productPage.addProductToCart();
        productPage.goToCart();
        cy.then(() => {
            cartPage.getProductPriceValue(savedLaptopName).should('contain', parsePrice(savedLaptopPrice));
        });
        cy.then(() => {
            expectedTotal = parsePrice(savedPhonePrice) + parsePrice(savedLaptopPrice);
            cartPage.getProductsTotalPrice().should((totalPrice) => {
                expect(parseInt(totalPrice)).to.eq(expectedTotal);
            });
        });
    });
});