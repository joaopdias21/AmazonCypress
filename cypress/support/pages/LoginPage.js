class LoginPage {
    enterUsername(username) {
           return cy.get('#ap_email').type(username);

    }

    submitContinue(){
        return cy.get('#continue');
    }

    enterPassword(password) {
        return cy.get('#ap_password').type(password);
    }

    submitLogin() {
        return cy.get('#auth-signin-button');
    }

    verifyLoginSuccess() {
      return cy.contains('Olá, Teste').should('exist');
    }

    verifyLoginIncorreto(){
        return cy.contains('Sua senha está incorreta').should('exist')
    }
}

export default LoginPage;