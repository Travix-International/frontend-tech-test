'use strict';

const responseUtils = require('../utils/response.utils');
const helpersUtils = require('../utils/helpers.utils');

/**
 * Retrieve the full list of tasks.
 * @param res
 * @returns {function(*=): (any | Promise<any>)}
 */
const getAllTasks = (res) => (tasksFromFile) => {
  return responseUtils.okWithJsonContent(res)(tasksFromFile);
};

/**
 * Retrieve single task
 * @param req - request from the client
 * @param res - response to the client
 * @returns {Function} - a function returning a json containing the requested task
 */
const getSingleTask = (req, res) => (tasksList) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isNaN(id)) {
    const task = helpersUtils.findTaskById(tasksList, id);
    return task ? responseUtils.okWithJsonContent(res)({task}) : responseUtils.notFound(res);
  }
  return responseUtils.badRequest(res);
};

/**
 * Create or update a task. This will be used as handler for both POST and PUT
 * @param req
 * @param res
 * @returns {Function}
 */
const updateOrCreateTask = (req, res) => (tasksList) => {
  if (!req.params.id) {
    return {
      status: responseUtils.created(res),
      tasksList: helpersUtils.addTaskToList(tasksList, tasksList.tasks.length, req.params.title, req.params.description)
    }
  }
  const id = parseInt(req.params.id, 10);
  if (!Number.isNaN(id)) {
    const task = helpersUtils.findTaskById(tasksList, id);
    return {
      status: task ? responseUtils.noContent(res) : responseUtils.created(res),
      tasksList: task ?
        helpersUtils.updateTaskInList(tasksList, helpersUtils.updateTask(task, req.params.title, req.params.description)) :
        helpersUtils.addTaskToList(tasksList, id, req.params.title, req.params.description)
    }
  }
  return {
    status: responseUtils.badRequest(res),
    tasksList: tasksList
  };
};

/**
 * Delete a single task form the list
 * @param req
 * @param res
 * @returns {Function}
 */
const deleteTask = (req, res) => (tasksList) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = helpersUtils.findTaskById(tasksList, id);
    return {
      status: task ? responseUtils.okWithJsonContent(res)({message: `Task with id ${task.id} deleted successfully`}) : responseUtils.accepted(res),
      tasksList: task ? helpersUtils.deleteTaskFromList(tasksList, helpersUtils.getTaskPosition(tasksList, task)) : tasksList
    }
  }
  return {
    status: responseUtils.badRequest(res),
    tasksList: tasksList
  };
};

module.exports = {
  getAllTasks,
  getSingleTask,
  updateOrCreateTask,
  deleteTask
};
