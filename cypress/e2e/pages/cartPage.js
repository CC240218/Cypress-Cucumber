
import CartElements from '../elements/cartElements';
import HeaderPage from './headerPage';
import LoginUser from './loginPage';

const auxHead = new HeaderPage();
const auxLogin = new LoginUser();
const cartElements = new CartElements();

class CartPage {

    loginDefault() {
        auxLogin.fullLogin(
            Cypress.env('USERNAME'),
            Cypress.env('PASSWORD')
        );
        
    }

    

    goToCart() {
        const btnName = 'carrinho';

        this.loginDefault();
        auxHead.btnHeader(btnName);
    }

    clickContinueShopping() {
        cy.get(cartElements.goBackBtn()).click();
    }

    clickCheckout() {
        cy.get(cartElements.checkoutBtn()).click();
    }

    assertPrdInCart() {
        cy.get(cartElements.prdInCart())
        .should('be.visible')
        .then(($prdList)=> {
            expect($prdList.length).to.be.greaterThan(0);
        })
    }

    assertCartPage() {
        cy.get(cartElements.cartContainer()).should('be.visible');
        cy.url().should('include', '/cart.html');
    }



}export default CartPage;