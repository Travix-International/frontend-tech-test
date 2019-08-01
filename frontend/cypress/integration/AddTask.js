const domain = `${Cypress.env('HOST')}:${Cypress.env('PORT')}`;

describe('Add Task', () => {
  beforeEach(() => {
    cy.visit(domain);
    cy.get('.add-task').click();
  });

  it('If title and description are empty', () => {
    cy.get('#task-save').should('be.disabled');
  });

  it('If description is empty', () => {
    cy.get('#task-title').type(`title`);
    cy.get('#task-save').should('be.disabled');
  });

  it('If title is empty', () => {
    cy.get('#task-description').type(`description`);
    cy.get('#task-save').should('be.disabled');
  });

  it('Clear title error message', () => {
    cy.get('#task-title').type(`title`);
    cy.get('#task-title').clear();
    cy.get('#task-title')
      .next('p')
      .invoke('text')
      .should('contain', 'Title cannot be empty.');
  });

  it('Clear description error message', () => {
    cy.get('#task-description').type(`description`);
    cy.get('#task-description').clear();
    cy.get('#task-description')
      .next('p')
      .invoke('text')
      .should('contain', 'Description cannot be empty.');
  });

  it('If title and description are not empty', () => {
    cy.get('#task-title').type(`title`);
    cy.get('#task-description').type(`description`);
    cy.get('#task-save').should('not.be.disabled');
  });

  it('If task is added to the task list', () => {
    cy.get('#task-title').type(`title`);
    cy.get('#task-description').type(`description`);
    cy.get('#task-save').click();
    cy.get('section>li>a>h2').should('contain', `title`);
    cy.get('section>li>a>p').should('contain', `description`);
  });
});
