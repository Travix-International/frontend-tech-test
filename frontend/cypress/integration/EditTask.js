const domain = `${Cypress.env('HOST')}:${Cypress.env('PORT')}`;

describe('Edit Task', () => {
  const randomTitle = `Title ${Math.random()}`;
  const randomDescription = `Description ${Math.random()}`;

  const newRandomTitle = `Title ${Math.random()}`;
  const newRandomDescription = `Description ${Math.random()}`;

  beforeEach(() => {
    cy.visit(domain);
    cy.get('.add-task').click();
    cy.get('#task-title').type(randomTitle);
    cy.get('#task-description').type(randomDescription);
    cy.get('#task-save').click();
    cy.get('section>li>a>h2')
      .contains(randomTitle)
      .click();
    cy.get('.task-edit').click();
  });

  it('Clear title error message', () => {
    cy.get('#task-title').clear();
    cy.get('#task-title')
      .next('p')
      .invoke('text')
      .should('contain', 'Title cannot be empty.');
  });

  it('Clear description error message', () => {
    cy.get('#task-description').clear();
    cy.get('#task-description')
      .next('p')
      .invoke('text')
      .should('contain', 'Description cannot be empty.');
  });

  it('If title and description are not empty', () => {
    cy.get('#task-edit').should('not.be.disabled');
  });

  it('If title and description are not empty', () => {
    cy.get('#task-title').clear();
    cy.get('#task-title').type(newRandomTitle);
    cy.get('#task-description').clear();
    cy.get('#task-description').type(newRandomDescription);
    cy.get('#task-save').click();
    cy.get('section>div>h2')
      .invoke('text')
      .should('contain', newRandomTitle);
    cy.get('section>div>p')
      .invoke('text')
      .should('contain', newRandomDescription);
  });
});
