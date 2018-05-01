/* eslint-disable */
const request = require('supertest')

describe('loading express', () => {
  let server
  beforeEach(() => {
    server = require('./server')
  })
  afterEach(() => {
    server.close()
  })
  it('responds to get /tasks', (done) => {
    request(server)
      .get('/tasks')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(!Array.isArray(res.body.tasks)) throw new Error('tasks field should be an array')
        done()
      })
  })
  it('update task', (done) => {
    const id = 0
    const name = 'NewTaskName'
    const description = 'NewTaskDescription'
    const status = 'NewTaskStatus'
    request(server)
      .put(`/task/update/${id}`)
      .send({
        name,
        description,
        status,
        subTasks: []
      })
      .expect(200)
      .end(function(err, res) {
        const { body: { task } } = res
        if(!task) throw new Error('task field is empty')
        if(task.id !== id ||
          task.name !== name ||
          task.description !== description ||
          task.status !== status ||
          task.subTasks.length !== 0) {
          throw new Error('task contains wrong data')
        }
        done()
      })
  })
  it('update subtask', (done) => {
    const parentId = 1
    const id = 110
    const name = 'NewTaskName'
    const description = 'NewTaskDescription'
    const status = 'NewTaskStatus'
    request(server)
      .put(`/subtask/update/${parentId}/${id}`)
      .send({
        name,
        description,
        status
      })
      .expect(200)
      .end(function(err, res) {
        const { body: { subtask } } = res
        if(!subtask) throw new Error('subtask field is empty')
        if(subtask.id !== id ||
          subtask.parentId !== parentId,
          subtask.name !== name ||
          subtask.description !== description ||
          subtask.status !== status) {
          throw new Error('subtask contains wrong data')
        }
        done()
      })
  })
})
/* eslint-enable */
