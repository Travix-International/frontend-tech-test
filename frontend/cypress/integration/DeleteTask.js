const domain = `${Cypress.env('HOST')}:${Cypress.env('PORT')}`;

describe('Delete Task', () => {
  const randomTitle = `Title ${Math.random()}`;
  const randomDescription = `Description ${Math.random()}`;

  beforeEach(() => {
    cy.visit(domain);
    cy.get('.add-task').click();
    cy.get('#task-title').type(randomTitle);
    cy.get('#task-description').type(randomDescription);
    cy.get('#task-save').click();
  });

  it('Cancel Deletion', () => {
    cy.get('section>li>a>h2')
      .contains(randomTitle)
      .click();
    cy.get('.task-delete').click();
    cy.get('#task-delete-cancel').click();
    cy.get('section h2')
      .invoke('text')
      .should('contain', randomTitle);
  });

  it('Confirm Deletion', () => {
    cy.get('section>li>a>h2')
      .contains(randomTitle)
      .click();
    cy.get('.task-delete').click();
    cy.get('#task-delete').click();
    cy.get('section>li>a>h2').should('not.contain', randomTitle);
  });
});
