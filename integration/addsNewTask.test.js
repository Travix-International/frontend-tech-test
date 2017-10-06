'use strict'

jest.setTimeout(30000)

const Nightmare = require('nightmare')

const nightmare = Nightmare({ show: false })

const countsTasks = () => {
  console.log('Counting tasks...')
  return nightmare
    .goto('http://localhost:3000')
    .wait(1000)
    .evaluate(() => {
      console.log('Tasks counted!')
      return document.querySelectorAll('.task-item').length
    })
}

const addsNewTask = () => {
  console.log('Adding a new task...')
  return nightmare
    .goto('http://localhost:3000')
    .type('.task-title-input', 'a new task')
    .type('.task-description-input', 'a new task description')
    .click('.task-submit-button')
    .wait(200)
    .evaluate(() => {
      console.log('Tasked added!')
      return document.querySelectorAll('.task-item').length
    })
    .end()
}

it('should add a new task to task list', (done) => {
  countsTasks().then((tasksLength) => {
    console.log(`Tasks counted: ${tasksLength} tasks...`)
    return addsNewTask().then((newTasksLength) => {
      console.log(`Current tasks count: ${tasksLength} tasks...`)
      expect(newTasksLength).toEqual(tasksLength + 1)
      done()
    })
  })
})
