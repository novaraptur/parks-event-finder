describe('Errors and warnings', () => {
  it('should not allow the user to search events without selecting a state', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').contains('See Events').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
