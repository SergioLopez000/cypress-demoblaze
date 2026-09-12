export default abstract class BasePage {

    private get homeNavBarLocator() {
        return cy.get('a.nav-link[href="index.html"]');
    }

    private get cartNavBarLocator() {
        return cy.get('#cartur');
    }

    public goToHome() {
        this.homeNavBarLocator.click();
    }

    public goToCart() {
        this.cartNavBarLocator.click();
    }
}
