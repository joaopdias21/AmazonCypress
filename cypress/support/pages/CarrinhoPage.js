class CarrinhoPage{

    clicarProduto(){
    
        return cy.get('[data-asin="B09B8VGCR8"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus')
    }

    addAoCarrinho(){
    return cy.get('#add-to-cart-button')
    }

    fecharOpcao(){
        return cy.get('.a-button-close')
    }

    verificaAddCarrinho(){
    return cy.contains('Adicionado ao carrinho').should('exist')

    }
}

export default CarrinhoPage;