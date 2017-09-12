const fs = require('fs');
const request = require('supertest');
const { expect } = require('chai');

const { jsonFile, pagination, pathToApi } = require('./config');
const app = require('./server');

let newId = 100;
const title = 'Test task';
const description = 'Create a test task';

describe(`GET ${pathToApi}/tasks`, function() {
  it('should respond with json', function(done) {
    request(app)
      .get(`${pathToApi}/tasks`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(Array.isArray(res.body.tasks)).to.be.eql(true);
        expect(res.body.tasks.length).to.be.eql(pagination.page_size);
        if (err) return done(err);
        return done();
      });
  });
});

describe(`POST ${pathToApi}/task/create/:title/:description`, function() {
  it('should respond with json', function(done) {
    request(app)
      .post(`${pathToApi}/task/create/${encodeURI(title)}/${encodeURI(description)}`)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        newId = res.body.task.id;
        return done();
      });
  });
});

describe(`PUT ${pathToApi}/task/update/:id/:title/:description/:completed`, function() {
  it('should respond 200', function(done) {
    request(app)
      .put(`${pathToApi}/task/update/${newId}/${encodeURI(title)}/${encodeURI(description)}/false`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('should respond 200', function(done) {
    request(app)
      .put(`${pathToApi}/task/update/${newId}/${encodeURI(title)}/${encodeURI(description)}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('should respond 404 not found', function(done) {
    request(app)
      .put(`${pathToApi}/task/update/-1/${encodeURI(title)}/${encodeURI(description)}/false`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('should respond 400 Bad Request', function(done) {
    request(app)
      .put(`${pathToApi}/task/update/null/${encodeURI(title)}/${encodeURI(description)}/false`)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe(`GET ${pathToApi}/task/:id`, function() {
  it('should respond with json', function(done) {
    request(app)
      .get(`${pathToApi}/task/${newId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.eql({ task: { id: newId, title, description, completed: false } });
        if (err) return done(err);
        return done();
      });
  });
  it('should respond with 404 not found', function(done) {
    request(app)
      .get(`${pathToApi}/task/-1`)
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('should respond with 400 Bad Request', function(done) {
    request(app)
      .get(`${pathToApi}/task/null`)
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe(`DELETE ${pathToApi}/task/delete/:id`, function() {
  it('should respond with 200', function(done) {
    request(app)
      .delete(`${pathToApi}/task/delete/${newId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('should respond with 404 not found', function(done) {
    request(app)
      .delete(`${pathToApi}/task/delete/-1`)
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('should respond with 400 Bad Request', function(done) {
    request(app)
      .delete(`${pathToApi}/task/delete/null`)
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
