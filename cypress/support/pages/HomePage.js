/// <reference types="Cypress" />
class HomePage {
    visit() {
       return cy.visit('https://www.amazon.com.br/')

    }

    openLoginPage() {
       return cy.get('#nav-link-accountList-nav-line-1')

    }
}

export default HomePage;