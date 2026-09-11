import BasePage from "./BasePage";

class CartPage extends BasePage {

    private getProductPriceLocator(productName: string) {
        return cy.get('#tbodyid').contains('tr', productName).find('td').eq(2)
    }

    private getTotalPriceLocator(){
        return cy.get('#totalp')
    }

    getProductPriceValue(productName:string){
        return this.getProductPriceLocator(productName).invoke('text');
    }

    getProductsTotalPrice(){
        return this.getTotalPriceLocator().invoke('text');
    }
}
export default new CartPage();