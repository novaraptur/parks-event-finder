describe('Page is loaded', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/');
  });

  it('should display a page with a nav bar, selector, and park image');

  it('should not allow the user to search events without selecting a state');

  it('should redirect to the home page if the user enters a garbage URL');

  it('should allow the user to select a state to search for events in parks in that state');

  it('should allow the user to go to the saved events page');

  it('should allow the user to go to the saved parks page');
});
