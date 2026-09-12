import homePage from "@pages/HomePage";
import productPage from "@pages/ProductPage";
import cartPage from "@pages/CartPage";
import { parsePrice } from "@support/priceUtils";
import products from "@fixtures/products.json";


describe("Demoblaze - add phone and laptop to cart", () => {
    let savedPhonePrice: string;
    let savedLaptopPrice: string;
    let expectedTotal: number;

    it("adds a phone and a laptop, and validates cart contents and total price", () => {
        homePage.navigateToDemoBlaze();
        homePage.getFirstElementPrice().then((price) => {
            savedPhonePrice = price;
        });
        homePage.clickFirstElement();
        productPage.addProductToCart();
        productPage.goToCart();
        cy.then(() => {
            cartPage.getProductPriceValue(products.phone.name).should('contain', parsePrice(savedPhonePrice));
        });
        cartPage.goToHome();
        homePage.navigateToCategory(products.laptop.category);
        homePage.getFirstElementPrice().then((price) => {
            savedLaptopPrice = price;
        });
        homePage.clickFirstElement();
        productPage.addProductToCart();
        productPage.goToCart();
        cy.then(() => {
            cartPage.getProductPriceValue(products.laptop.name).should('contain', parsePrice(savedLaptopPrice));
        });
        cy.then(() => {
            expectedTotal = parsePrice(savedPhonePrice) + parsePrice(savedLaptopPrice);
            cartPage.getProductsTotalPrice().should((totalPrice) => {
                expect(parseInt(totalPrice)).to.eq(expectedTotal);
            });
        });
    });
});