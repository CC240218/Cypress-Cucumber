
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProdDetails from '../pages/pdpPage'
import ProdutctsList from '../pages/inventoryPage';

const pdp = new ProdDetails();
const auxInventory =new ProdutctsList();

Given(/^que esteja na pagina do inventario$/, () => {
	auxInventory.goToInventory();
    auxInventory.assertInventoryPage();

});

When(/^clicar no produto atravez do "([^"]*)"$/, (atribute) => {
	pdp.clickToPdpItem(atribute);
});


Then(/^deve ser redirecionado para a pagina de detalhes do produto$/, () => {
	pdp.assertGoToPdp();
});

//------------------------------


Given(/^esteja na pdp do produto$/, () => {
	pdp.goToPdpItem();
});

When(/^exibir o item na pagina$/, () => {
	pdp.assertGoToPdp();
});

Then(/^deve exibir informações como titulo, descrição, valor e imagem do item$/, () => {
	pdp.assertDetails();
});

// --------------------------------


Given(/^que esteja na pdp do produto$/, () => {
	pdp.goToPdpItem();
});

When(/^clicar em "([^"]*)"$/, (nameButton) => {
	pdp.clickToCart(nameButton);
	
});

Then(/^o produto deve ser "([^"]*)" do carrinho$/, (args1) => {
	// será implementado quando for feito o teste do carrinho
});

// -----------------------------------

Then(/^o nome do botão deve mudar para "([^"]*)"$/, (nameButton) => {
	pdp.assertnameButtonPdp(nameButton);

});
