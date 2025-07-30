
import HeaderElements from "../elements/headerElements";
import InventoryElements from "../elements/inventoryElements";
import LoginPage from "../pages/loginPage"

const auxInventory = new InventoryElements();
const auxLogin = new LoginPage();
const head = new HeaderElements();

class HeaderPage {

    loginToHeader() {
        auxLogin.fullLogin(
            Cypress.env('USERNAME'),
            Cypress.env('PASSWORD')
        )
    }

    btnHeader(btn) {
        switch(btn) {
            case'carrinho':
                cy.get(head.headerCart()).click();
            break;

            case'menu':
                cy.get(head.headBurger()).click();
            break;

            default:
                throw new Error('argumento não configurado no case. '+btn)
        }
    }

    clickOptions(option) {
        cy.contains(head.headerListMenu(),option).click();
    }

    orderProducts(orderBtn) {
        cy.get(head.headerOrder()).select(orderBtn);
    }

    assertOrderBy(orderList) {
        if (orderList === 'de A a Z' || orderList === 'de Z a A') {
            cy.get(auxInventory.itemTitle()).then(($txt)=>{
                const nameItem = [...$txt].map(el=>el.innerText.trim())

                switch (orderList) {
                    case 'de A a Z':
                        const AZ = [...nameItem].sort((a,b)=> a.localeCompare(b));
                        expect(nameItem).to.deep.equal(AZ)
                    break;
                    case'de Z a A':
                        const ZA = [...nameItem].sort((a,b)=> b.localeCompare(a));
                        expect(nameItem).to.deep.equal(ZA)
                    break;

                    default:
                        break;
                }
            })
        }else if(orderList === 'por menor preço' || orderList === 'por maior preço'){
            cy.get(auxInventory.itemPrice()).then(($price)=> {
                const priceItem = [...$price].map(el=> parseFloat(el.innerText.replace('$','').trim()))

                switch (orderList) {
                    case 'por menor preço':
                        const priceLow = [...priceItem].sort((a,b)=>a-b);
                        expect(priceItem).to.deep.equal(priceLow)    
                    break;
                    case'por maior preço':
                        const priceHigh = [...priceItem].sort((a,b)=>b-a);
                        expect(priceItem).to.deep.equal(priceHigh)  
                    break;
                
                    default:
                        break;
                }
            })

        }else{
            throw new Error("erro");
            
        }
        
    }

    
    assertListMenu(options) {
        cy.contains(head.headerListMenu(), options)
        .should('exist')
    }

    assertHeaderVisible() {
        cy.get(head.headerContainer()).should('be.visible')
    }

    assertTextLogo(textLogo) {
        cy.get(head.headerLogo())
        .invoke('text')
        .should('exist')
        .then(($logo)=> {
            expect($logo).to.eq(textLogo)
        });
    }

    assertTitleHeader(titlePage) {
        cy.get(head.headerTitle(titlePage))
        .invoke('text')
        .then(($titleHeader)=> {
            expect($titleHeader).to.eq(titlePage)
        });
    }

    assertElementsHeaderBtn(button) {
        switch(button) {
            case'menu':
                cy.get(head.headBurger())
                .should('be.visible')
            break;

            case'carrinho':
                cy.get(head.headerCart())
                .should('be.visible')
            break;

            case'ordenação':
                cy.get(head.headerOrder())
                .should('be.visible')
            break;

            default:
                throw new Error('argumento não configurado no case '+button)
        }
    }

} export default HeaderPage;