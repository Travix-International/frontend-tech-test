/* eslint-disable dot-notation */
process.env['HUGE_LIST'] = true;

const request = require('supertest');
const app = require('./app');

const exampleTask = { title: 'test', completed: true };

describe('API', () => {
  test('It should response 200 to GET method', () => (
    request(app).get('/task').expect(200)
  ));

  test('It should response 200 to GET task by ID', () => (
    request(app).get('/task/67873187').expect(200)
  ));

  test('It should response 201 to POST task', () => (
    request(app).post('/task')
      .send(exampleTask)
      .expect(201)
  ));

  test('It should response 204 to PUT task by ID', () => (
    request(app)
      .put('/task/67873187')
      .send(exampleTask)
      .expect(204)
  ));

  test('It should response 404 to GET task by ID with wrong ID', () => (
    request(app).get('/task/123').expect(404)
  ));

  test('It should response 404 to PUT with wrong ID', () => (
    request(app).put('/task/123').expect(404)
  ));

  test('It should response 404 to DELETE with wrong ID', () => (
    request(app).delete('/task/123').expect(404)
  ));

  test('It should response 400 to POST task without a body with a valid title', () => (
    request(app).post('/task').expect(400)
  ));

  test('It should response 400 to GET task by ID with a invalid ID', () => (
    request(app).get('/task/abc').expect(400)
  ));

  test('It should response 400 to PUT with a invalid ID', () => (
    request(app).put('/task/abc').expect(400)
  ));

  test('It should response 400 to DELETE with a invalid ID', () => (
    request(app).delete('/task/abc').expect(400)
  ));
});
