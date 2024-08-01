class PesquisaPage{
    pesquisa(pesquisar) {
        return cy.get('#twotabsearchtextbox').type(pesquisar);
 
  }
 
     submitButton(){
         return cy.get('#nav-search-submit-button')
     }

     verificaBusca(){
        return cy.contains('sabonete liquido bebe').should('exist')

     }
 
}

export default PesquisaPage;
