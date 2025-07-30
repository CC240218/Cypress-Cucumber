
import LoginElements from '../elements/loginElements'
const login = new LoginElements()

const url = Cypress.config('baseUrl')

class LoginUser {
    
    goToLoginPage() {
        cy.visit(url)
        
    }

    insertUserAndPass( name, password) {

        cy.get(login.inputUserName()).type(name)
        cy.get(login.inputPassword()).type(password)

    }

    insertTextInput(id, text) {
        if (!id == '') {
            cy.get(login.genericInput(id)).type(text)
        }
        
    }

    loginButton() {
        cy.get(login.inputButton()).click().wait(1000)

    }

    assertLoginPage(logoName) {
        cy.get(login.loginLogo())
        .invoke('text')
        .should('exist')
        .then(($txtLogo)=> {
            expect($txtLogo).to.eq(logoName)
        })
    }

    assertError(erro) {
        cy.contains(login.erroMessage(), erro)
    }

    fullLogin(name, password) {
        this.goToLoginPage()
        this.insertUserAndPass(name, password)
        this.loginButton()
    }
} export default LoginUser