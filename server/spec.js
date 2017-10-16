const request = require('supertest')
var assert = require('chai').assert;

const server = require('./index')
const tasks = require('./tasks')

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

describe('loading express', () => {
  let server

  beforeEach(() => {
    server = require('./server')
  })

  afterEach(() => {
    server.close()
  })

  it('responds', (done) => {
    request(server)
      .get('/tasks')
      .expect(200, done)
  })

  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  })
})

describe('GET /tasks', () => {
  it('returns all tasks', (done) => {
    request(server)
      .get('/tasks')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        ok(res.body.tasks !== tasks, 'Tasks list does not match')

        done()
      })
  })
})

describe('GET /task/:id', () => {
  it('returns a single task', (done) => {
    const id = 1

    request(server)
      .get('/task/' + id)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        assert.strictEqual(res.body.task.title, tasks.tasks[id].title, 'Invalid single task')

        done()
      })
  })

  it('does not find a task', (done) => {
    request(server)
      .get('/task/9999999')
      .set('Accept', 'application/json')
      .expect(404)
      .end((err, res) => {
        assert(res.body.message === 'Not Found', 'Invalid tasks should return an error message')

        done()
      })
  })

  it('handles with invalid params', (done) => {
    request(server)
      .get('/task/NaN')
      .set('Accept', 'application/json')
      .expect(400)
      .end((err, res) => {
        assert(res.body.message === 'Bad Request', 'Invalid tasks should return an error message')

        done()
      })
  })
})

describe('PUT /task/update/:id/:title/:description', () => {
  it('updates a given task', (done) => {
    request(server)
      .put('/task/update/1/Task%20Title/Task%20Description')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        assert(res.body.message === 'Task has been updated', 'Updated tasks should return a success message')

        done()
      })
  })
})

describe('POST /task/create/:title/:description', () => {
  it('creates a new task', (done) => {
    request(server)
      .post('/task/create/Task%20Title/Task%20Description')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        assert(res.body.message === 'Task has been created', 'Created tasks should return a success message')

        done()
      })
  })
})

describe('DELETE /task/delete/:id', () => {
  it('deletes a task', (done) => {
    request(server)
      .delete('/task/delete/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        assert(res.body.message === 'Task has been removed', 'Removed tasks should return a success message')

        done()
      })
  })

  it('does not find a task', (done) => {
    request(server)
      .delete('/task/delete/9999999')
      .set('Accept', 'application/json')
      .expect(404)
      .end((err, res) => {
        assert(res.body.message === 'Not Found', 'Invalid tasks should return an error message')

        done()
      })
  })

  it('handles with invalid params', (done) => {
    request(server)
      .delete('/task/delete/NaN')
      .set('Accept', 'application/json')
      .expect(400)
      .end((err, res) => {
        assert(res.body.message == 'Bad Request', 'Invalid tasks should return an error message')

        done()
      })
  })
})
