/// <reference types="Cypress" />
describe('keeper page', () => {
  it('should render the card', () => {
    cy.visit("http://localhost:3001/");
    cy.get('textarea').should('have.length', 1);
    cy.get('header');
    cy.get('footer').find('p');
  });
  it('should display the page title', () => {
    cy.visit("http://localhost:3001/");
    cy.get('h1').contains('Keeper');
    cy.get('h1').should('have.length', 1);
  });
});