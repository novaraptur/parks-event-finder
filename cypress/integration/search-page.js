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

  it('should allow the user to click on a card to see a detail page for that event', () => {
    cy.wait(1000);
    cy.get('h3').contains('Evening Program').click();
    cy.url().should('eq', 'http://localhost:3000/event/ED8626B2-D695-1640-7D2575AB4A547D66');
  });
});
