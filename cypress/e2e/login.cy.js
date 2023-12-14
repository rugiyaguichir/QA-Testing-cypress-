describe('Login Suite:', () => {
  it('should do login 0', () => {
    cy.visit('http://167.114.201.175:5000/');
    cy.get('input[name="userName"]').type('Admin');
    cy.get('input[name="password"]').type('Admin@Navi');
    cy.get('button[type="submit"]').click();
    cy.pause();
  })
})