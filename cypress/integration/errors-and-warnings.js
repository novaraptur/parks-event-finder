describe('Errors and warnings', () => {
  it('should not allow the user to search events without selecting a state', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').contains('See Events').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display a message to the user if they have no saved events', () => {
    cy.visit('http://localhost:3000/saved-events');
  });

  it('should display a message to the user if they have no saved parks', () => {
    cy.visit('http://localhost:3000/saved-parks');
  });

  it('should display a warning if there is no data for a park', () => {
    cy.visit('http://localhost:3000/parks/kdau');
  });

  it('should display a warning if there is no data for an event', () => {
    cy.visit('http://localhost:3000/events/aoobgawepauwgpaohwedknaf');
  });

  it('should display an error message if the data cannot be loaded from the API', () => {
    
  });
});
