class OrdenarPage{
    clicaClassificar(){
        return cy.get('#a-autoid-0-announce');
    }

    clicaPrecoMenorMaior(){
        return cy.get('#s-result-sort-select_1');
    }

    validaOrdem(){
        return cy.contains('Preço: Do menor para o maior').should('exist')
    }
}

export default OrdenarPage;