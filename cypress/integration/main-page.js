describe('Home page is loaded', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/');
  });

  it('should display a page with a nav bar, selector, and park image', () => {
    cy.get('ul').should('be.visible');
    cy.get('select').should('be.visible');
    cy.get('button').contains('See Events').should('be.visible');
    cy.get('img').should('be.visible');
  });

  it('should not allow the user to search events without selecting a state', () => {
    cy.get('button').contains('See Events').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should redirect to the home page if the user enters a garbage URL', () => {
    cy.visit('http://localhost:3000/garbage-url-test');
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should allow the user to select a state to search for events in parks in that state', () => {
    cy.get('select').select('Colorado');
    cy.get('button').contains('See Events').click();
    cy.url().should('eq', 'http://localhost:3000/search');
  });

  it('should allow the user to go to the saved events page', () => {
    cy.get('li').contains('Saved Events').click();
    cy.url().should('eq', 'http://localhost:3000/saved-events');
  });

  it('should allow the user to go to the saved parks page', () => {
    cy.get('li').contains('Saved Parks').click();
    cy.url().should('eq', 'http://localhost:3000/saved-parks');
  });
});
