import BasePage from "./BasePage";

class HomePage extends BasePage {

    private categoryLocator(categoryName: string) {
        return cy.get('.list-group').contains('a', categoryName);
    }

    private get firstElementLocator() {
        return cy.get('.card-title').first();
    }

    private get cardPriceFirstElementLocator() {
        return cy.get('.card-block h5').first();
    }

    navigateToDemoBlaze(){
        cy.visit('/');
    }

    getFirstElementPrice(){
        return this.cardPriceFirstElementLocator.invoke('text');
    }

    clickFirstElement(){
        this.firstElementLocator.click();
    }

    navigateToCategory(categoryName: string){
        cy.intercept('POST', '**/api.demoblaze.com/bycat').as('byCategory');
        this.categoryLocator(categoryName).click();
        cy.wait('@byCategory');
    }
}
export default new HomePage();