import BasePage from "./BasePage";

class ProductPage extends BasePage {

    private get addToCartButtonLocator() {
        return cy.contains('a.btn-success', 'Add to cart');;
    }

    public addProductToCart(){
        cy.intercept('POST', '**/api.demoblaze.com/addtocart').as('addToCart');
        this.addToCartButtonLocator.click();
        cy.wait('@addToCart');
    }
}
export default new ProductPage();