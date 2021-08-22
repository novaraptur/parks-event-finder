// describe('Event detail page', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//     cy.get('select').select('Colorado');
//     cy.get('button').contains('See Events').click();
//     cy.wait(1000);
//     cy.get('h3').contains('Evening Program').click();
//   });
//
//   it('shoud allow the user to go back to the search page', () => {
//     cy.get('button').contains('Back').click();
//     cy.url().should('eq', 'http://localhost:3000/search');
//   });
//
//   it('should allow the user to click a button to save the event', () => {
//     cy.get('button').contains('Save Event').click();
//     cy.get('button').contains('Back').click();
//     cy.get('li').contains('Saved Events').click();
//     cy.get('h3').contains('Evening Program');
//     cy.get('p').contains('Curecanti National Recreation Area');
//   });
//
//   it('should allow the user to click a link to view details about the park', () => {
//     cy.get('h3').contains('Curecanti National Recreation Area').click();
//     cy.url().should('eq', 'http://localhost:3000/park/cure');
//   });
// });
// 
// describe('Park detail page', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//     cy.get('select').select('Colorado');
//     cy.get('button').contains('See Events').click();
//     cy.wait(1000);
//     cy.get('h3').contains('Evening Program').click();
//     cy.get('h3').contains('Curecanti National Recreation Area').click();
//     cy.url().should('eq', 'http://localhost:3000/park/cure');
//   });
//
//   it('should allow the user to go back to the search page', () => {
//     cy.get('button').contains('Back').click();
//     cy.url().should('eq', 'http://localhost:3000/search');
//   });
//
//   it('should allow the user to click a button to save the park', () => {
//     cy.get('button').contains('Save Park').click();
//     cy.get('button').contains('Back').click();
//     cy.get('li').contains('Saved Parks').click();
//     cy.get('h3').contains('Curecanti National Recreation Area');
//   });
// });
