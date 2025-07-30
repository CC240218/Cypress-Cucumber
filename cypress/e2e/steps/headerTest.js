import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HeaderPage from "../pages/headerPage";
import LoginUser from "../pages/loginPage";
import ProdDetails from "../pages/pdpPage";


const head = new HeaderPage();
const auxLogin = new LoginUser();
const auxDetails = new ProdDetails();

Given(/^que tenha feito o login$/, () => {
    head.loginToHeader();
});

When(/^o header for exibido$/, () => {
	head.assertHeaderVisible();

});

Then(/^o texto da logo deve ser exibido "([^"]*)"$/, (textLogo) => {
	head.assertTextLogo(textLogo)
});

// ---------------------

Then(/^deve exibir o botão "([^"]*)"$/, (button) => {
	head.assertElementsHeaderBtn(button);

});
//----------------------



When(/^clicar no botão do "([^"]*)"$/, (btn) => {
	head.btnHeader(btn);

});

Then(/^deve direcionar para a pagina do carrinho$/, () => {
	// será implementado quando for feito o teste do carrinho
});

//----------------------


When(/^clicar no botão do "([^"]*)" lateral$/, (menu) => {
	head.btnHeader(menu);

});

Then(/^deve expandir o menu lateral com a opção "([^"]*)"$/, (option) => {
	head.assertListMenu(option);

});

// -----------------------


When(/^clicar no "([^"]*)" lateral$/, (menu) => {
	head.btnHeader(menu);
	
});

When(/^clicar na opção "([^"]*)"$/, (optionsMenu) => {
	head.clickOptions(optionsMenu);
	
});

Then(/^"([^"]*)"$/, (args1) => {
	let txtLogo = 'Swag Labs'
	auxLogin.assertLoginPage(txtLogo)
	
});
// ---------------------------


Given(/^que deseja voltar a lista de produtos$/, () => {
	head.loginToHeader()
	auxDetails.clickToPdpItem('titulo')

});

When(/^clicar no "([^"]*)"$/, (menu) => {
	head.btnHeader(menu);
	
});

When(/^depois em "([^"]*)"$/, (optionsMenu) => {
	head.clickOptions(optionsMenu);
});

Then(/^deve voltar para a pagina de produtos "([^"]*)"$/, (title) => {
	head.assertTitleHeader(title);

});

//-------------------------------


Given(/^que esteja na tela de "([^"]*)"$/, (titlePageHeader) => {
	head.loginToHeader()
	head.assertTitleHeader(titlePageHeader);
	
});

When(/^clicar no botão de ordenação "([^"]*)"$/, (btnOrder) => {
	head.assertElementsHeaderBtn(btnOrder);
	
});


When(/^escolher a rodenação de "([^"]*)"$/, (orderType) => {
	head.orderProducts(orderType);

});

Then(/^deve organizar a lista "([^"]*)"$/, (orderList) => {
	head.assertOrderBy(orderList)
	
});



