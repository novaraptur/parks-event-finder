describe('Event search page', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/');
    cy.get('select').select('Colorado');
    cy.get('button').contains('See Events').click();
  });

  it('should display a collection of cards for the events in that state\'s parks', () => {
    cy.wait(1000);
    cy.get('h3').contains('Evening Program');
    cy.get('p').contains('Mesa Verde National Park');
  });

  it('should allow the user to go back to the home page', () => {
    cy.get('li').contains('Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should allow the user to go to their saved events page', () => {
    cy.get('li').contains('Saved Events').click();
    cy.url().should('eq', 'http://localhost:3000/saved-events');
  });

  it('should allow the user to go to their saved parks page', () => {
    cy.get('li').contains('Saved Parks').click();
    cy.url().should('eq', 'http://localhost:3000/saved-parks');
  });
});
