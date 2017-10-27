const Nightmare = require('nightmare');
const assert = require('assert');
const addTaskselector = '.addProductLink a';
const todoTableSelector = 'table[name="todoTable"]';
const localhost = 'http://localhost:8080';
const testTask = 'Integration Task Test';

describe('Create Task - Integration Test', function() {
  this.timeout('30s');

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true });
  })

  describe('/ (Home Page)', () => {
    it('should load without error', done => {
      nightmare.goto(localhost)
      .end()
      .then(result => { done() })
      .catch(done)
    })
  })

  describe('/ (Create Task)', () => {
    it('should add TASK without error', done => {
      nightmare.goto(localhost)
        .wait(addTaskselector)
        .click(addTaskselector)
        .wait('input[name="task"]')
        .type('input[name="task"]', testTask)
        .click('.submitButton')
        .end()
        .then(result => { done() })
        .catch(done)
    })
  })

  describe('/ (Verify New Task)', () => {
    it('should exist new TASK', done => {
      nightmare.goto(localhost)
        .wait(addTaskselector)
        .evaluate((todoTableSelector) => {
            return document.querySelector(todoTableSelector).innerText
          }, todoTableSelector)
        .end()
        .then((text) => {
          assert(0 < text.indexOf(testTask), 'Fail: Task does not exist')
        })
        .then(result => { done() })
        .catch(done)
    })
  })

})
