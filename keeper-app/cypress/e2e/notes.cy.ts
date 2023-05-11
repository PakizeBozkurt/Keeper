/// <reference types="Cypress" />
describe("notes managment", () => {
  it("should open and close the new note modal", () => {
    cy.visit("http://localhost:3001/");
    cy.contains('.note').click();
    cy.get('.note').click({force: true});
    cy.get('.note').should('not.exist');

    cy.contains('.note').click();
    cy.contains('h1').click();
  });

  it('should create a note', () => { 
    cy.visit("http://localhost:3001/");
    cy.contains('.note').click();
    cy.get('.note').type('New Note');
    cy.get('.note').contains('New Note').click();
    cy.get('.create-note').type('Some notes created');
    cy.get('.create-note input').contains('New task created');

   })
});
