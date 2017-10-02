jest.mock('../tasks.json', () => {
  return {
    tasks: [
      { id: 1, title: 'mocked', description: 'just a mock' }
    ]
  }
})

const request = require('supertest')
let app = null

beforeEach(() => {
  app = require('./app')
})

describe('Server App', () => {
  describe('Tasks Fetch', () => {
    test('should respond [GET] /tasks', () => {
      return request(app).get('/tasks').expect(200)
    })
  })

  describe('Task Fetch', () => {
    describe('when task is not into storage', () => {
      test('should respond with 404', () => {
        return request(app).get('/task/2').expect(404)
      })
    })

    describe('when task id is not a number', () => {
      test('should respond with 400', () => {
        return request(app).get('/task/id').expect(400)
      })
    })

    describe('when task is into storage', () => {
      test('should respond with 200', () => {
        return request(app).get('/task/1').expect(200)
      })
    })
  })

  describe('Task Update', () => {
    describe('when task is not into storage', () => {
      test('should respond with 404', () => {
        return request(app).put('/task/update/2/abc/xyz').expect(404)
      })
    })

    describe('when task id is not a number', () => {
      test('should respond with 400', () => {
        return request(app).put('/task/update/id/abc/xyz').expect(400)
      })
    })

    describe('when task could be updated', () => {
      test('should respond with 204', () => {
        return request(app).put('/task/update/1/abc/xyz').expect(200)
      })
    })
  })

  describe('Task Create', () => {
    describe('when task could be created', () => {
      test('should respond with 201', () => {
        return request(app).post('/task/create/def/abc').expect(201)
      })
    })
  })

  describe('Task Delete', () => {
    describe('when task is not into storage', () => {
      test('should respond with 404', () => {
        return request(app).delete('/task/delete/2').expect(404)
      })
    })

    describe('when task id is not a number', () => {
      test('should respond with 400', () => {
        return request(app).delete('/task/delete/id').expect(400)
      })
    })

    describe('when task could be deleted', () => {
      test('should respond with 200', () => {
        return request(app).delete('/task/delete/1').expect(200)
      })
    })
  })
})
