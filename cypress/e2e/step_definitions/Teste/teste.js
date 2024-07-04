import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";


Given ("que estou logado na plataforma da Amazon", ()=>{
    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#ap_email').type('testeamzon@hotmail.com{enter}')
    cy.get('#ap_password').type('123456789{enter}')
    cy.contains('Olá, Teste').should('exist')
})

When ("pesquiso o produto alexa e adiciono ele ao carrinho", ()=>{
    cy.get('#twotabsearchtextbox').type('alexa{enter}')
    cy.get('[data-asin="B09B8VGCR8"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
    cy.get('#add-to-cart-button').click()

 })

 Then ("o produto deve ser adicionado ao carrinho", ()=>{
    cy.contains('Adicionado ao carrinho').should('exist')

 })


 Given("que acesso o site da Amazon",()=>{
    cy.visit('https://www.amazon.com.br/')

 })

 When("pesquiso um produto por uma palavra chave e clico em enter",()=>{
    cy.get('#twotabsearchtextbox').type('sabonete liquido bebe{enter}')

 })

 Then("os produtos devem aparecer", ()=>{
    cy.contains('sabonete liquido bebe').should('exist')

 })

 Given ("que acesso o site da Amazon e pesquiso algum produto",()=>{
    cy.visit('https://www.amazon.com.br/')
    cy.get('#twotabsearchtextbox').type('guitarra{enter}')

 })

 When ("clico em Classsificar por:  Preço: Do menor para o Maior",()=>{
    cy.get('#a-autoid-26').click()
    cy.get('#s-result-sort-select_1').click()
 })

 Then ("deve ordenar os produtos de forma crescente", ()=>{
   cy.contains('Preço: Do menor para o maior').should('exist')

 })