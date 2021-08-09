describe('Event search page', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/');
    cy.get('select').select('Colorado');
    cy.get('button').contains('See Events').click();
  });

  it('should display a collection of cards for the events in that state\'s parks');

  it('should allow the user to go back to the home page');

  it('should allow the user to go to their saved events page');

  it('should allow the user to go to their saved parks page');

  it('should allow the user to click on a card to see a detail page for that event');
});
