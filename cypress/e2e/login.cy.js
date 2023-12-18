describe('Login Suite:', () => {
  it('should do login successfully', () => {
    cy.visit('http://167.114.201.175:5000/');
    cy.get('input[name="userName"]').type('Admin');
    cy.get('input[name="password"]').type('Admin@Navi');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.url.should('include', 'clients');
  })

  it('should check validations: invalid Login', ()=> {
    cy.visit('http://167.114.201.175:5000/');
    cy.get('input[name="userName"]').type('InvalidLogin');
    cy.get('input[name="password"]').type('Admin@Navi');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.url.should('include', 'login');
  })

  it('should check validations: invalid Password', ()=> {
    cy.visit('http://167.114.201.175:5000/');
    cy.get('input[name="userName"]').type('Admin');
    cy.get('input[name="password"]').type('Admin@InvalidPassword');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.url.should('include', 'login');
  })
})