describe('CreateArea component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('should allow user to add a note', () => {
    cy.get('textarea[name="content"]').type('Test note');
    cy.get('form').submit();
    cy.get('textarea[name="content"]').should('have.value', '');
    cy.contains('Test note').should('exist');
  });

  it('should expand when user clicks on textarea', () => {
    cy.get('textarea[name="content"]').click();
    cy.get('input[name="title"]').should('exist');
    cy.get('textarea[name="content"]').should('have.attr', 'rows', '3');
  });
});