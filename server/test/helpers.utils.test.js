'use strict';

const expect = require('chai').expect;
const helpers = require('../utils/helpers.utils');
const fakeTasksList = require('./utils/fakeTasks');

describe('Helpers utilities tests', () => {
  describe('findTaskById', () => {
    it('should return the correct task', () => {
      const selectedTask = helpers.findTaskById(fakeTasksList, 1);
      expect(selectedTask.id).to.be.equal(1);
    });
  });

  describe('getTaskPosition', () => {
    it('should return the correct task position if task is preset', () => {
      const selectedTask = helpers.findTaskById(fakeTasksList, 1);
      expect(helpers.getTaskPosition(fakeTasksList, selectedTask)).to.be.equal(1);
    });
    it('should return -1 if the task is not in the list', () => {
      const selectedTask = helpers.findTaskById(fakeTasksList, 1000);
      expect(helpers.getTaskPosition(fakeTasksList, selectedTask)).to.be.equal(-1);
    });
  });

  describe('createTask', () => {
    it('should return a well formed task object', () => {
      const newTask = helpers.createTask(1, 'a', 'b');
      expect(newTask).to.be.an('object').that.has.all.keys('id', 'title', 'description');
      expect(newTask).to.be.eql({
        id: 1,
        title: 'a',
        description: 'b'
      });
    });
  });

  describe('updateTask', () => {
    it('should update a task', () => {
      const fakeExistingTask = {
        id: 1,
        title: 'a',
        description: 'b'
      };
      const modifiedTask = helpers.updateTask(fakeExistingTask, 'aa', 'bb');
      expect(modifiedTask).to.be.eql({
        id: 1,
        title: 'aa',
        description: 'bb'
      })
      expect(modifiedTask).to.not.be.eql(fakeExistingTask)
    });
  });

  describe('updateTaskInList', () => {
    it('should update a task in the list', () => {
      let taskFromList = helpers.findTaskById(fakeTasksList, 1);
      taskFromList = helpers.updateTask(taskFromList, 'a', 'b');
      const newListWithModifiedTask = helpers.updateTaskInList(fakeTasksList, taskFromList);
      expect(helpers.findTaskById(newListWithModifiedTask, 1)).to.be.eql(taskFromList);
      expect(newListWithModifiedTask).to.not.be.eql(fakeTasksList);
    });
  });

  describe('addTaskToList', () => {
    it('should add a task to the list', () => {
      const listWithNewTask = helpers.addTaskToList(fakeTasksList, 9999, 'added', 'task added');
      expect(listWithNewTask.tasks).to.have.deep.include(
        {
          id: 9999,
          title: 'added',
          description: 'task added'
        });
      expect(listWithNewTask).to.not.be.eql(fakeTasksList);
    });
  });

  describe('deleteTaskFromList', () => {
    it('should delete a task from the list', () => {
      const taskToDelete = helpers.findTaskById(fakeTasksList, 1);
      const listWithDeletedTask = helpers.deleteTaskFromList(fakeTasksList, helpers.getTaskPosition(fakeTasksList, taskToDelete));
      expect(helpers.findTaskById(listWithDeletedTask, 1)).to.be.an('undefined');
      expect(listWithDeletedTask).to.not.eql(fakeTasksList);
    });
  });

});