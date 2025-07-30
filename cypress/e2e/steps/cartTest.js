
import CartPage from "../pages/cartPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HeaderPage from "../pages/headerPage";
import ProdutctsList from "../pages/inventoryPage";

const cart = new CartPage();
const auxHead =new HeaderPage();
const auxInvent = new ProdutctsList();

Given(/^ja tenha acessado o site$/, () => {
	cart.loginDefault();
});

When(/^clicar no botão do "([^"]*)" no header$/, (btnCart) => {
	auxHead.btnHeader(btnCart);
});

Then(/^validar ir para o carrinho de compras$/, () => {
	cart.assertCartPage();
});
//----------------------------

Given(/^ja esteja no carrinho de compras$/, () => {
	cart.goToCart();
});

When(/^clicar no botão Continue Shopping$/, () => {
	cart.clickContinueShopping();
});

Then(/^deve ir para a página "([^"]*)"$/, (titlePage) => {
	auxHead.assertTitleHeader(titlePage);
});

//-----------------------------


Given(/^que tenha adicionado um produto no carrinho$/, () => {
	var btn = 'Add to cart';
	var cartBtn = 'carrinho';

	cart.loginDefault();
	auxInvent.btnAddOrRemove(btn);
	
});

Then(/^deve validar o produtos no carrinho$/, () => {
	cart.assertPrdInCart()
});
