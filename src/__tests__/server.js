const request = require('supertest');
const app = require('../../server');
const mock = require('./mock.json');

jest.mock('./mock.json');

describe('GET /tasks', () => {
  test('should respond with a 200', () => (
    request(app)
      .get('/tasks')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => JSON.parse(res.text))
      .then(res => {
        expect(res.tasks).toHaveLength(2);
      })
  ));

  test('should limit the results with param limit', () => (
    request(app)
      .get('/tasks?limit=1')
      .then(res => JSON.parse(res.text))
      .then(res => {
        expect(res.tasks).toHaveLength(1);
        expect(res.tasks[0].title).toEqual('First task ever');
        expect(parseInt(res.total, 10)).toEqual(1);
        expect(parseInt(res.limit, 10)).toEqual(1);
        expect(parseInt(res.page, 10)).toEqual(1);
      })
  ));

  test('should page the results based on limit', () => (
    request(app)
      .get('/tasks?limit=1&page=2')
      .then(res => JSON.parse(res.text))
      .then(res => {
        expect(res.tasks[0].title).toEqual('Second test task')
        expect(parseInt(res.page, 10)).toEqual(2);
      })
  ));
});

describe('GET /task/:id', () => {
  test('should respond with a 200', () => (
    request(app)
      .get('/task/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => JSON.parse(res.text))
      .then(res => {
        expect(res.task.title).toEqual('Second test task');
      })
  ));
});
