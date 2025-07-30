

import InventoryElements from "../elements/inventoryElements";
import LoginUser  from "./loginPage";

const inventoryElements = new InventoryElements();
const login = new LoginUser(); 



class ProdutctsList {

    goToInventory() {
        login.fullLogin(
            Cypress.env('USERNAME'), 
            Cypress.env('PASSWORD')
        )
    }

    assertInventoryPage() {
        login.assertLogin();
    }



    assertProdList() {
        cy.get(inventoryElements.prodList()).then(($items) => {
            const qtd = $items.length;
            expect(qtd).to.be.greaterThan(0);
            cy.log(qtd+' total de produtos na pagina')
        });
    }

    assertCardProd() {
       cy.get(inventoryElements.listOfItem()).first().within(()=> {
            cy.get(inventoryElements.itemTitle())
                .should('exist')
                .invoke('text')
                .then((titleProd)=> cy.log('TITULO: '+titleProd));

            cy.get(inventoryElements.itemDescr())
                .should('exist')
                .invoke('text')
                .then((describeProd)=> cy.log('DESCRIÇÃO: '+describeProd));

            cy.get(inventoryElements.itemPrice())
                .should('exist')
                .invoke('text')
                .then((priceProd)=> cy.log('PREÇO: '+priceProd));

            cy.get(inventoryElements.itemImg())
                .should('have.attr', 'src')
                .and('not.be.empty')
                .then((imgSrc)=> cy.log('IMAGEM: '+imgSrc));

       });
    }
    
    btnAddOrRemove(nameButton) {

        switch (nameButton) {
            case 'Add to cart':
                cy.get(inventoryElements.btnAddOrRemoveCart('add-to-cart')).click()
                break;
            case 'Remove':
                cy.get(inventoryElements.btnAddOrRemoveCart('add-to-cart')).click()
                cy.get(inventoryElements.btnAddOrRemoveCart('remove')).click()
                break;
        
            default:
                throw new Error('Botão não reconhecido: ' + nameButton);
            
        }
        
    }

    assertBtnText(textButton) {

        switch (textButton) {
            case 'Add to cart':
                cy.get(inventoryElements.btnAddOrRemoveCart('add-to-cart'))
                .invoke('text')
                .should('eq', 'Add to cart')
                break;

            case 'Remove':
                cy.get(inventoryElements.btnAddOrRemoveCart('remove'))
                .invoke('text')
                .should('eq', 'Remove')
                break;
        
            default:
                throw new Error('Texto do botão não reconhecido: ' + textButton);
        }

    }
    
} export default ProdutctsList 