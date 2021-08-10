describe('Errors and warnings', () => {
  it('should not allow the user to search events without selecting a state', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').contains('See Events').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display an error message if the data cannot be loaded from the API', () => {
    cy.visit('http://localhost:3000/');
    cy.get('select').select('Colorado');
    cy.get('button').contains('See Events').click();
    cy.intercept('GET',
      'https://developer.nps.gov/api/v1/events/stateCode="CO"',
      {
        statusCode: 500
      }
    );
  });
});
