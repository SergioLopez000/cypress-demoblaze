export default class BasePage {

    protected get homeNavBarLocator() {
        return cy.get('a.nav-link[href="index.html"]');
    }

    protected get cartNavBarLocator() {
        return cy.get('#cartur');
    }

    goToHome() {
        this.homeNavBarLocator.click();
    }

    goToCart() {
        this.cartNavBarLocator.click();
    }
}
