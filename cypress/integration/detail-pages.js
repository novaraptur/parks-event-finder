describe('Event detail page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('select').select('Colorado');
    cy.get('button').contains('See Events').click();
    cy.wait(1000);
    cy.get('h3').contains('Evening Program').click();
  });

  it('should display details about the event');

  it('shoud allow the user to go back to the search page');

  it('should allow the user to click a button to save the event');

  it('should allow the user to click a link to view details about the park');
});

describe('Park detail page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('select').select('Colorado');
    cy.get('button').contains('See Events').click();
    cy.wait(1000);
    cy.get('h3').contains('Evening Program').click();
  });

  it('should display details about the park');

  it('should allow the user to go back to the search page');

  it('should allow the user to click a button to save the park');
});
