'use strict';

const chai = require('chai');
const tasksHandlers = require('../handlers/tasks.handlers');
const responseUtils = require('../utils/response.utils')
const expect = chai.expect;
const should = chai.should();
const fakeTasksList = require('./utils/fakeTasks');

describe('Tasks handlers', () => {
  describe('getSingleTask', () => {
    it('should return a specific task from the list (GET /tasks/:taskId) with status ok (200)', () => {
      const response = tasksHandlers.getSingleTask(fakeTasksList, 1);
      expect(response.status).to.be.a('function');
      expect(response.status.toString()).to.be.eql(responseUtils.okWithJsonContent(fakeTasksList).toString());
      expect(response.task).to.be.eql(fakeTasksList.tasks[1]);
    });
    it('should return not found (404) if task id not in the list', () => {
      const response = tasksHandlers.getSingleTask(fakeTasksList, 6666);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.notFound.toString());
      expect(response.status.code).to.be.eql(404);
    });
    it('should return bad request (400) if task id invalid', () => {
      const response = tasksHandlers.getSingleTask(fakeTasksList, 'aaa');
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.badRequest.toString());
      expect(response.status.code).to.be.eql(400);
    });
  });

  describe('updateOrCreateTask', () => {
    it('should create a new task and return returning (201) status', () => {
      const taskToCreate = {
        title: 'test',
        describe: 'test'
      };
      const response = tasksHandlers.updateOrCreateTask(fakeTasksList, taskToCreate.title, taskToCreate.description);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.created.toString());
      expect(response.status.code).to.be.eql(201);
    });
    it('should return not found (404) status if not all params received', () => {
      const taskToCreate = {
        title: 'test',
      };
      const response = tasksHandlers.updateOrCreateTask(fakeTasksList, taskToCreate.title, taskToCreate.description);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.created.toString());
      expect(response.status.code).to.be.eql(404);
    });
    it('should modify a task and returns no content (204) status', () => {
      const taskToModify = {
        id: 1,
        title: 'test',
        description: 'test'
      };
      const response = tasksHandlers.updateOrCreateTask(fakeTasksList, taskToModify.title, taskToModify.description);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.noContent.toString());
      expect(response.status.code).to.be.eql(204);
    });
    it('should return bad request (400) status receiving an invalid id', () => {
      const taskToModify = {
        id: 'test',
        title: 'test',
        description: 'test'
      };
      const response = tasksHandlers.updateOrCreateTask(fakeTasksList, taskToModify.title, taskToModify.description);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.badRequest.toString());
      expect(response.status.code).to.be.eql(400);
    });

    it('should return created (201) status and create a new task if id is not in the list', (done) => {
      const taskToModify = {
        id: 999,
        title: 'test',
        description: 'test'
      };
      const response = tasksHandlers.updateOrCreateTask(fakeTasksList, taskToModify.title, taskToModify.description);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.badRequest.toString());
      expect(response.status.code).to.be.eql(201);
    });
  });

  xdescribe('deleteTask', () => {
    it('should remove an element from the list and return ok (200) status', () => {
      const response = tasksHandlers.deleteTask(fakeTasksList, 1);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(
        responseUtils.okWithJsonContent({message: `Task with id 1 deleted successfully`}).toString());
      expect(response.status.code).to.be.eql(200);
    });
    it('should return an accepted (202) status if the task to delete is not in the list', (done) => {
      const response = tasksHandlers.deleteTask(99999999);
      expect(response.status.response).to.be.a('function');
      expect(response.status.response.toString()).to.be.eql(responseUtils.accepted.toString());
      expect(response.status.code).to.be.eql(202);
    });
    it('should return a bad request (400) status if the id is invalid', (done) => {
      chai.request(server.app)
        .delete('/tasks/a')
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
