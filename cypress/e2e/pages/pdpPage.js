import LoginUser from '../pages/loginPage';
import PdpElements from   '../elements/pdpElements';
import InventoryElements from '../elements/inventoryElements';


const auxLogin      = new LoginUser();
const auxInventory  = new InventoryElements();
const pdp           = new PdpElements();


class ProdDetails {

    goToPdpItem() {
        auxLogin.fullLogin(
            Cypress.env('USERNAME'),
            Cypress.env('PASSWORD')
        );
        cy.get(auxInventory.itemTitle()).first().click();

    }

    clickToPdpItem(atribute) {
        switch(atribute) {
            case'titulo':
                cy.get(auxInventory.itemTitle()).first().click();
            break;
            case'imagem':
                cy.get(auxInventory.itemImg()).eq(1).click();
            break;
            default:
            throw new Error('atributo invalido');
                
        }
        
    }

    assertGoToPdp() {
        cy.get(pdp.itemDetailesComponent())
        .should('be.visible')
    }

    


    assertDetails() {
        cy.get(auxInventory.itemTitle())
        .should('be.visible')
        .invoke('text')
        .then(($title)=> cy.log('TITULO DO ITEM NA PDP: '+$title));

        cy.get(auxInventory.itemDescr())
        .should('be.visible')
        .invoke('text')
        .then(($description)=> cy.log('DESCRIÇÃO DO ITEM NA PDP: '+$description));

        cy.get(auxInventory.itemPrice())
        .should('be.visible')
        .invoke('text')
        .then(($price)=> cy.log('PREÇO DO PRODUTO NA PDP: '+$price))
        
        cy.get(pdp.itemPdpImg())
        .should('have.attr','src')
        .then((src)=> {
            expect(src).not.be.empty;
            cy.log('CAMINHO DA IMAGEM DO PRODUTO:'+src)
        })

    }

    clickToCart(nameButton) {

        switch(nameButton) {
            case'Add to cart':
                cy.get(pdp.itemPdpBtn_addRemoveCart('add-to-cart')).click();
            break;

            case'Remove':
                cy.get(pdp.itemPdpBtn_addRemoveCart('add-to-cart')).click();
                cy.get(pdp.itemPdpBtn_addRemoveCart('remove')).click();
            break;
            default:
                throw new Error(`o nome do botão ${nameButton} não é valido`)
        }
    }

    assertnameButtonPdp(nameButton) {
        switch (nameButton) {
            case 'Add to cart':
                cy.get(pdp.itemPdpBtn_addRemoveCart('remove'))
                .invoke('text')
                .then(($textbutton)=>{
                    expect($textbutton).to.eq('Remove')
                });
            break;

            case'Remove':
                cy.get(pdp.itemPdpBtn_addRemoveCart('add-to-cart'))
                .invoke('text')
                .then(($textbutton)=>{
                    expect($textbutton).to.eq('Add to cart')
                })

            default:
                break;
        }
    }

} export default ProdDetails


