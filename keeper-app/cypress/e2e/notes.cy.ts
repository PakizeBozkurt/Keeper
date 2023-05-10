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
});
