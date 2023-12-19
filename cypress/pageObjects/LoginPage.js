export class LoginPage{
    
    //#region Selectors

    usernameField() {return cy.get('input[name="userName"]');}
    passwordField() {return cy.get('input[name="password"]');}
    loginButton() {return cy.get('button[type="submit"]');}
    //#endregion

    doLogin(username="Admin", password="Admin@Navi"){
        cy.visit('http://167.114.201.175:5000/');
        this.usernameField().type(username);
        this.passwordField().type(password);
        this.loginButton().click();
        cy.wait(2000);
    }
}