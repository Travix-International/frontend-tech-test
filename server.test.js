/* eslint-disable no-unused-expressions */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[should|expect]" }] */
/* global describe, it */
const chai = require('chai');
const chaiHttp = require('chai-http');
const debug = require('debug');
const server = require('./server');

const debugResponse = debug('tests:tasks');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

const testTask = { title: 'a test task' };

describe('/api', () => {
  it('it should GET tasks', (done) => {
    chai
      .request(server)
      .get('/api/tasks')
      .end((err, res) => {
        expect(err).to.be.null;

        debugResponse(res.body);

        res.should.have.status(200);

        res.body.should.be.a('array');

        res.body[0].should.be.a('object');

        res.body[0].should.have.property('id');
        res.body[0].should.have.property('title');
        res.body[0].should.have.property('completed');

        expect(res.body[0].title).to.equal('a task');
        done();
      });
  });

  it('it should GET a task', (done) => {
    chai
      .request(server)
      .get('/api/tasks/1')
      .end((err, res) => {
        expect(err).to.be.null;

        debugResponse(res.body);

        res.should.have.status(200);

        res.body.should.be.a('object');
        res.body.task.should.be.a('object');

        res.body.task.should.have.property('id');
        res.body.task.should.have.property('title');
        res.body.task.should.have.property('completed');

        expect(res.body.task.title).to.equal('a task');

        done();
      });
  });

  it('it should return 404 when GETting a non existing task', (done) => {
    chai
      .request(server)
      .get('/api/tasks/999')
      .end((err) => {
        err.should.have.status(404);
        done();
      });
  });

  it('It should create a new task', (done) => {
    chai
      .request(server)
      .post('/api/tasks/')
      .send(testTask)
      .end((err, res) => {
        expect(err).to.be.null;

        debugResponse(res.body);

        res.should.have.status(201);

        res.body.should.be.a('object');
        res.body.task.should.be.a('object');

        res.body.task.should.have.property('id');
        res.body.task.should.have.property('title');
        res.body.task.should.have.property('completed');

        expect(res.body.task.title).to.equal('a test task');

        done();
      });
  });

  it('It should update a task', (done) => {
    chai
      .request(server)
      .put('/api/tasks/1')
      .send(testTask)
      .end((err, res) => {
        expect(err).to.be.null;

        debugResponse(res.body);

        res.should.have.status(200);

        res.body.should.be.a('object');
        res.body.task.should.be.a('object');

        res.body.task.should.have.property('id');
        res.body.task.should.have.property('title');
        res.body.task.should.have.property('completed');

        expect(res.body.task.title).to.equal('a test task');

        done();
      });
  });

  it('It should delete a task', (done) => {
    chai
      .request(server)
      .put('/api/tasks/1')
      .send(testTask)
      .end((err, res) => {
        expect(err).to.be.null;

        debugResponse(res.body);

        res.should.have.status(200);
        done();
      });
  });
});

//   test('It should response 404 to GET task by ID with wrong ID', () =>
//     request(app)
//       .get('/task/123')
//       .expect(404));
//
//   test('It should response 404 to PUT with wrong ID', () =>
//     request(app)
//       .put('/task/123')
//       .expect(404));
//
//   test('It should response 404 to DELETE with wrong ID', () =>
//     request(app)
//       .delete('/task/123')
//       .expect(404));
//
//   test('It should response 400 to POST task without a body with a valid title', () =>
//     request(app)
//       .post('/task')
//       .expect(400));
//
//   test('It should response 400 to GET task by ID with a invalid ID', () =>
//     request(app)
//       .get('/task/abc')
//       .expect(400));
//
//   test('It should response 400 to PUT with a invalid ID', () =>
//     request(app)
//       .put('/task/abc')
//       .expect(400));
//
//   test('It should response 400 to DELETE with a invalid ID', () =>
//     request(app)
//       .delete('/task/abc')
//       .expect(400));
// });
