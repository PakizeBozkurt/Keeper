/// <reference types="Cypress" />
describe("notes managment", () => {
  it("should open and close the new note modal", () => {
    cy.visit("http://localhost:3001/");
    cy.contains('form').click();
    cy.get('form').click({force: true});
  });
});
