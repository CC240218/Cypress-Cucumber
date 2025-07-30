
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../pages/inventoryPage';

const product = new InventoryPage();


Given(/^que ja tenha feito login na pagina$/, () => {
	product.goToInventory();
});

When(/^acessar a pagina de inventario$/, () => {
	product.assertInventoryPage();
});

Then(/^o site deve exibir uma coleção de produtos$/, () => {
	product.assertProdList();
});

 //------------------------
Given(/^que esteja na pagina de inventario$/, () => {
	product.goToInventory();
});

When(/^exibir os produtos$/, () => {
	product.assertInventoryPage();
});

Then(/^o card do produto deve conter titulo, preço, imagem e descrição$/, () => {
	product.assertCardProd();
});

//--------------------------


When(/^clicar no botão "([^"]*)"$/, (nameButton) => {
	product.btnAddOrRemove(nameButton);
	
});

Then(/^deve adicionar o produto no cart$/, () => {
	//Será feito quandoa suite do carrinho estiver pronta
});

Then(/^e mudar seu texto para "([^"]*)"$/, (textButton) => {
	product.assertBtnText(textButton);
	
});





