import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginUser from "../pages/loginPage";
import HeaderPage from "../pages/headerPage";

const user 	  = new LoginUser();
const auxHead = new HeaderPage();

Given(/^que esteja na pagina de login da "([^"]*)"$/, (logo) => {
	user.goToLoginPage()
	user.assertLoginPage(logo);
	
});


When(/^digitar nos respectivos campos Username "([^"]*)" e Password "([^"]*)"$/, (name,password) => {
	user.insertUserAndPass(name,password);

});

When(/^clicar no botão Login$/, () => {
	user.loginButton();
});


Then(/^o site deve logar com sucesso a page "([^"]*)"$/, (titlePage) => {
	auxHead.assertTitleHeader(titlePage);
	
});


//------------------ Valitation Scenarios


Given(/^que esteja na pagina de login$/, () => {
	user.goToLoginPage()
});


When(/^clicar no botão Login "([^"]*)" "([^"]*)"$/, (inputs,text) => {
	user.insertTextInput(inputs,text)
	user.loginButton()
});

When(/^digitar nos campos username "([^"]*)" e password "([^"]*)"$/, (name,password) => {
	user.insertUserAndPass(name,password);
});

When(/^clicar no botão de Login$/, () => {
	user.loginButton()
});


Then(/^o site deve exibir mensagem de erro "([^"]*)"$/, (args1) => {
	user.assertError(args1);
});
