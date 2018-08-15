import request from 'supertest';
import app from './../../../server';
import data from './../../../tasks.json';

describe('API testing', () => {
  const body = {
    title: 'TODO2',
    description: 'TODO2',
    tags: []
  };
  const resBody = {
    ...body,
    id: 2,
    done: false
  };
  afterAll(() => {
    app.close();
  });

  test('GET /tasks', done => {
    request(app)
      .get('/tasks')
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          tasks: data.tasks
        });
        done();
      });
  });
  test('GET /tasks?tag=todo', done => {
    request(app)
      .get('/tasks?tag=todo')
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          tasks: [data.tasks[0]]
        });
        done();
      });
  });
  test('GET /task/0 success', done => {
    request(app)
      .get('/task/0')
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          task: data.tasks[0]
        });
        done();
      });
  });
  test('GET /task/2 Not Found', done => {
    request(app)
      .get('/task/2')
      .end((err, res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({
          message: 'Not found.'
        });
        done();
      });
  });
  test('GET /task/abc Bad request', done => {
    request(app)
      .get('/task/abc')
      .end((err, res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({
          message: 'Bad request.'
        });
        done();
      });
  });

  test('POST /task', done => {
    request(app)
      .post('/task')
      .send(body)
      .end((err, res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(resBody);
        done();
      });
  });

  test('PUT /task/:id', done => {
    request(app)
      .post('/task')
      .send(body)
      .end((err, res) => {
        request(app)
          .put(`/task/${res.body.id}`)
          .send({
            ...res.body,
            title: 'TODO-#2',
            done: true
          })
          .end((error, resp) => {
            expect(resp.statusCode).toBe(200);
            expect(resp.body).toEqual({
              ...res.body,
              title: 'TODO-#2',
              done: true
            });
            done();
          });
      });
  });
});

