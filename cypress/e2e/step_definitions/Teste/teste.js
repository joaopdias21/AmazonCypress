/// <reference types="Cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pages/HomePage.js";
import LoginPage from "../../../support/pages/LoginPage.js";
import CarrinhoPage from "../../../support/pages/CarrinhoPage.js"
import PesquisaPage from "../../../support/pages/PesquisaPage.js"
import ValidaCarrinhoPage from "../../../support/pages/ValidaCarrinhoPage.js"
import OrdenarPage from "../../../support/pages/OrdenarPage.js"


const homePage = new HomePage();
const loginPage = new LoginPage();
const carrinhoPage = new CarrinhoPage();
const pesquisaPage = new PesquisaPage();
const validaCarrinhoPage = new ValidaCarrinhoPage();
const ordenarPage = new OrdenarPage();
const username = 'testeamzon@hotmail.com';
const password = '123456789';
const password2 = '55555555555';
const pesquisar = 'alexa';



// TESTE PESQUISAR PRODUTO

 Given("que acesso o site da Amazon",()=>{
   homePage.visit();


 })

 When("pesquiso um produto por uma palavra chave e clico em enter",()=>{
   const pesquisar = 'sabonete liquido bebe';

   pesquisaPage.pesquisa(pesquisar);
   pesquisaPage.submitButton().click();

 })

 Then("os produtos devem aparecer", ()=>{
    pesquisaPage.verificaBusca();

 })


// TESTE LOGIN

Given ('que acesso o site da Amazon e vou me logar', ()=>{
      homePage.visit();
      homePage.openLoginPage().click();
})

When ('insiro meu usuario e senha', ()=>{
   loginPage.enterUsername(username);
    loginPage.submitContinue().click();
    loginPage.enterPassword(password);
    loginPage.submitLogin().click();
})

Then('devo me logar na plataforma', ()=>{
   loginPage.verifyLoginSuccess();
})


// TESTE ADICIONAR AO CARRINHO
Given (/^que estou logado na plataforma da Amazon$/, ()=>{
    homePage.visit();
    homePage.openLoginPage().click();

    loginPage.enterUsername(username);
    loginPage.submitContinue().click();
    loginPage.enterPassword(password);
    loginPage.submitLogin().click();
    loginPage.verifyLoginSuccess();
  
})

When ("pesquiso o produto alexa e adiciono ele ao carrinho", ()=>{

   pesquisaPage.pesquisa(pesquisar);
   pesquisaPage.submitButton().click();
   carrinhoPage.clicarProduto().click();
   carrinhoPage.addAoCarrinho().click();
   carrinhoPage.fecharOpcao().click();
   

   

 })

 Then ("o produto deve ser adicionado ao carrinho", ()=>{
    carrinhoPage.verificaAddCarrinho();

 })

// TESTE VALIDAR PRODUTOS NO CARRINHO

 Given ("que estou logado na plataforma da Amazon",()=>{
  
   homePage.visit();
   homePage.openLoginPage().click();
   loginPage.enterUsername(username);
   loginPage.submitContinue().click();
   loginPage.enterPassword(password);
   loginPage.submitLogin().click();
   loginPage.verifyLoginSuccess();

 })

 When ("no icone do carrinho",()=>{
   
   
   validaCarrinhoPage.clicaCarrinho().click();
 })

 Then ("devo ver meus produtos no carrinho", ()=>{
   
   validaCarrinhoPage.verificaCarrinho();

 })


//  TESTE ORDENAR PRODUTOS

Given ("que acesso o site da Amazon e pesquiso algum produto",()=>{
   homePage.visit();
   const pesquisar = 'guitarra';

   pesquisaPage.pesquisa(pesquisar);
   pesquisaPage.submitButton().click();

})

When('clico em Classsificar por:  Preço: Do menor para o Maior', ()=>{
   ordenarPage.clicaClassificar().click();
   ordenarPage.clicaPrecoMenorMaior().click();
})

Then('deve ordenar os produtos de forma crescente', ()=>{
   ordenarPage.validaOrdem();
})