class ValidaCarrinhoPage{
    clicaCarrinho(){
        return cy.get('#nav-cart')
    }

    verificaCarrinho(){
        return cy.contains('Carrinho de compras').should('exist')
    }
}

export default ValidaCarrinhoPage;