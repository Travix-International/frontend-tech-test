import { toggleTodo } from '../../src/actions';

context('AddTodo', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Add Todo', () => {
    it('succesfully add new to-do', () => {
      cy.get('#add-todo')
        .find('form')
        .as('form');

      cy.get('@form')
        .find('input[name="title"]')
        .type('Adding a new task');

      cy.get('@form')
        .find('input[name="description"]')
        .type('Adding a new description');

      cy.get('@form')
        .find('button')
        .click();

      cy.get('ul')
        .find('li')
        .last()
        .as('todo');

      cy.get('@todo').should('contain', 'Adding a new task');
      cy.get('@todo').should('contain', 'Adding a new description');
    });
  });
});
