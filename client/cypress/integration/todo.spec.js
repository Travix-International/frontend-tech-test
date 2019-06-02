/* eslint-disable */
/// <reference types="Cypress" />

context('TODO APP', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Listing Tasks', () => {
    it('should list tasks', () => {
      cy.get('ul')
      .children()
      .should('have.length', 3);
    });

    it('should list completed tasks only', () => {
      expect(true).to.equal(false);
    });

    it('should list pending tasks only', () => {
      expect(true).to.equal(false);
    });
  });

  describe('Adding Task', () => {
    it('should add task with given data', () => {
      expect(true).to.equal(false);
    });

    it('should not let user to add task if user does not fill title or description', () => {
      expect(true).to.equal(false);
    });
  });

  describe('Updating Task', () => {
    it('should update task with new data', () => {
      expect(true).to.equal(false);
    });

    it('should not let user to update task if user does not fill title or description', () => {
      expect(true).to.equal(false);
    });
  });

  describe('Deleting Task', () => {
    it('should delete task', () => {
      expect(true).to.equal(false);
    });

    it('should delete all completed tasks', () => {
      expect(true).to.equal(false);
    });

    it('should clear all tasks', () => {
      expect(true).to.equal(false);
    });
  });

});
/* eslint-enable */
