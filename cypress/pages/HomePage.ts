import BasePage from "./BasePage";

class HomePage extends BasePage {

    private categoryLocator(categoryName: string) {
        return cy.get('.list-group').contains('a', categoryName);
    }

    private elementLocator(index: number) {
        return cy.get('.card-title a').eq(index);
    }

    private cardPriceLocator(index: number) {
        return cy.get('.card-block h5').eq(index);
    }

    public navigateToDemoBlaze(){
        cy.visit('/');
    }

    public getElementName(index: number){
        return this.elementLocator(index).invoke('text').then((text) => text.trim());
    }

    public getElementPrice(index: number){
        return this.cardPriceLocator(index).invoke('text');
    }

    public clickElement(index: number){
        this.elementLocator(index).click();
    }

    public navigateToCategory(categoryName: string){
        cy.intercept('POST', '**/api.demoblaze.com/bycat').as('byCategory');
        this.categoryLocator(categoryName).click();
        cy.wait('@byCategory');
    }
}
export default new HomePage();