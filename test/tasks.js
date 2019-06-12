'use strict';

const chai = require('chai');
const  mocha = require('mocha');
const request = require('supertest');

const app = require('../server');
const { describe, it } = mocha;
const { expect } = chai;

describe('To do list integration test', () => {
  let task = { title: 'My title', description: 'My description' };

  describe('Get tasks', () => {
    it('should get all tasks', done => {
      request(app)
        .get('/api/tasks')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200);
          expect(res.body.tasks).to.be.an('array');
          done();
        })
    });
  });
  describe('Create task', () => {
    it('should create a task', done => {
      request(app)
        .post('/api/tasks')
        .send(task)
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(201);
          expect(res.body.message).to.equal('Resource created');
          expect(res.body.task.title).to.equal('My title');
          task = res.body.task;
          done();
        })
    });
  });
  describe('Get a task', () => {
    it('should get a task', done => {
      request(app)
        .get(`/api/tasks/${task.id}`)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.task.title).to.equal('My title');
          done();
        })
    });
  });
  describe('Edit task', () => {
    it('should edit a task', done => {
      request(app)
        .put(`/api/tasks/${task.id}`)
        .send({ title: 'My titles', description: 'My desc' })
        .end(function(err, res) {
          expect(res.statusCode).to.equal(201);
          expect(res.body.task.title).to.equal('My titles');
          expect(res.body.task.description).to.equal('My desc');
          done();
        })
    });
  });
  describe('Delete a task', () => {
    it('should delete a task', done => {
      request(app)
        .delete(`/api/tasks/${task.id}`)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(201);
          expect(res.body.message).to.equal('Deleted');
          done();
        })
    });
  });


  describe('Get deleted task', () => {
    it('should fail to get a deleted task', done => {
      request(app)
        .get(`/api/tasks/${task.id}`)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(404);
          expect(res.body.message).to.equal('Not found.');
          done();
        })
    });
  });
});
