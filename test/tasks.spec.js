const request = require('supertest');
const app = require('../server.js');
const agent = request.agent(app);
const assert = require('assert');

describe('CRUD tasks', function() {
  it('should create a task successfully', (done) => {
    agent
    .post('/task')
    .send({ title: 'foo', description: 'bar' })
    .expect(201, done);
  });

  it('should fail creating a task with missing data', (done) => {
    agent
    .post('/task')
    .send({ title: 'foo' }) // No description
    .expect(400, done);
  });

  it('should get an existing task', (done) => {
    agent
    .get('/task/0')
    .expect(200, (err, res) => {
      assert.ok(res.body.task);
      assert.equal(res.body.task.title, 'foo');
      assert.equal(res.body.task.description, 'bar');
      done();
    });
  });

  it('should get a list of tasks', (done) => {
    agent
    .get('/task')
    .expect(200, (err, res) => {
      assert.ok(res.body.tasks);
      assert.ok(Array.isArray(res.body.tasks));
      done();
    });
  });

  it('should update an existing task', (done) => {
    agent
    .put('/task/0')
    .send({ title: 'Foo', description: 'Bar' })
    .expect(204)
    .then((res) => {
      return agent.get('/task/0');
    })
    .then((res) => {
      assert.ok(res.body.task);
      assert.equal(res.body.task.title, 'Foo');
      assert.equal(res.body.task.description, 'Bar');
      done();
    });
  });

  it('should delete an existing task', (done) => {
    agent
    .delete('/task/0')
    .expect(200)
    .then((res) => {
      return agent.get('/task');
    })
    .then((res) => {
      const task = res.body.tasks.find((task) => task.id === 0);
      assert.equal(task, undefined);
      done();
    });
  });

  it('should fail deleting a not existing task', (done) => {
    agent
    .delete('/task/0')
    .expect(404, done);
  });

  after(() => {
    app.close();
  });
})
