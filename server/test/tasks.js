process.env.NODE_ENV = 'test'

const assert = require('assert');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
let app = require('../server');
const tasksContainer = require('../tasks.json');



describe('GET tasks', () => {
    it('should return OK status', function() {
        return request(app)
          .get('/tasks')
          .then(function(response){
              assert.equal(response.status, 200)
          })
      });

      it('should return json', function() {
        return request(app)
          .get('/tasks')
          .then(function(response){
              expect(response.body).should.be.a('object');
          })
      });
});

describe('POST  tasks', () => {
    it('should have response message and 201', function() {
        const task = {
            id: tasksContainer.tasks.length,
            title: 'Some title',
            description: 'Some desc',
        };
        tasksContainer.tasks.push(task);

        return request(app)
          .post('/task/create/' +task.title+ '/' + task.description)
          .then(function(response){
            assert.equal(response.status, 201)
            response.body.should.have.property('message').eql('Resource created');
          })
      });
});

describe('DELETE  tasks', () => {
    it('should have response message and 200', function() {
        const task = {
            id: tasksContainer.tasks.length,
            title: 'Some title',
            description: 'Some desc',
        };
        tasksContainer.tasks.push(task);

        let taskId = 0;

        return request(app)
          .delete('/task/delete/' + taskId)
          .then(function(response){
            assert.equal(response.status, 200)
            response.body.should.have.property('message').eql('Updated successfully');
          })
      });
});

describe('UPDATE tasks', () => {
    it('should have response 204', function() {

        const updatedTask = {
            id: 1,
            title: 'title',
            description: 'desc',
        };

        return request(app)
          .put('/task/update/' +updatedTask.id+ '/' +updatedTask.title+ '/' + updatedTask.description)
          .then(function(response){
            assert.equal(response.status, 204);
          })
      });
});