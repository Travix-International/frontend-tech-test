import request from 'supertest';
import app from './../index';

// Integration tests
describe('Test all routes of tasks', () => {
  let testTask = {};
  test('get tasks', (done) => {
    request(app)
      .get('/task')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const tasks = JSON.parse(res.text);
        expect(tasks).toBeInstanceOf(Array);
        done();
      })
  });

  test('post task', (done) => {
    request(app)
      .post('/task')
      .send({
        title: 'Title test jest',
        description: 'Description test jest',
        date: '2017-07-04 18:00',
        completed: true
      })
      .expect(200)
      .end((err, res) => {
        testTask = JSON.parse(res.text);
        expect(testTask).toBeInstanceOf(Object);
        done();
      })
  });

   test('put task', (done) => {
    request(app)
      .put(`/task/${testTask._id}`)
      .send({
        title: 'Title test jest 2',
        description: 'Description test jest 2',
        date: '2017-07-05 20:00',
        completed: false
      })
      .expect(200)
      .end((err, res) => {
        const task = JSON.parse(res.text);
        expect(task).toBeInstanceOf(Object);
        done();
      })
  });

  test('delete task', (done) => {
    request(app)
      .delete(`/task/${testTask._id}`)
      .expect(200)
      .end((err, res) => {
        const task = JSON.parse(res.text);
        expect(task).toBeInstanceOf(Object);
        done();
      })
  });
});