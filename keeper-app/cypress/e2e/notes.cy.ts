/// <reference types="Cypress" />
describe("notes managment", () => {
  it("should open and close the new note modal", () => {
    cy.visit("http://localhost:3001/");
    cy.contains('form').click();
    cy.get('form').click({force: true});
  });
});
describe('Note component', () => {
  it('should display note title and content', () => {
    const note = {
      id: 1,
      title: 'Test Note',
      content: 'This is a test note',
    };

    

    cy.get('h1').should('have.text', 'Test Note');
    cy.get('p').should('have.text', 'This is a test note');
  });

  it('should call onDelete when delete button is clicked', () => {
    const onDelete = cy.stub();
    const note = {
      id: 1,
      title: 'Test Note',
      content: 'This is a test note',
      onDelete,
    };

  

    cy.get('button').click();
    expect(onDelete).to.be.calledWith(1);
  });
});