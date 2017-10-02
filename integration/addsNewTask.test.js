'use strict'

jest.setTimeout(10000)

const Nightmare = require('nightmare')

const nightmare = Nightmare({ show: true })

const addsNewTask = () => {
  return nightmare
    .goto('http://localhost:3000')
    .type('.task-title-input', 'a new task')
    .type('.task-description-input', 'a new task description')
    .click('.task-submit-button')
    .wait(200)
    .evaluate(() => document.querySelector('.task-items').children.length)
    .end()
}

it('should add a new task to task list', (done) => {
  addsNewTask().then((newTasksLength) => {
    expect(newTasksLength).toEqual(1)
    done()
  })
})
