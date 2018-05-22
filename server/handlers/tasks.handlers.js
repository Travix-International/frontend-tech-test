'use strict';

const responseStatusUtils = require('../utils/response-status.util');
const helpersUtils = require('../utils/helpers.utils');

/**
 * Retrieve single task
 * @param tasksList
 * @param idFromRequest
 * @returns {*}
 */
const getSingleTask = (tasksList, idFromRequest) => {
  const id = parseInt(idFromRequest, 10);
  if (!Number.isNaN(id)) {
    const task = helpersUtils.findTaskById(tasksList, id);
    return {
      status: task ? responseStatusUtils.responseStatus.OK.response(task) : responseStatusUtils.responseStatus.NOT_FOUND,
      task: task
    }
  }
  return {
    status: responseStatusUtils.responseStatus.BAD_REQUEST,
  };
};

/**
 * Create or update a task. This will be used as handler for both POST and PUT
 * @param tasksList
 * @param title
 * @param description
 * @param idFromRequest
 * @returns {*}
 */
const updateOrCreateTask = (tasksList, title, description, idFromRequest = undefined) => {
  if (!idFromRequest) {
    return {
      status: responseStatusUtils.responseStatus.CREATED,
      tasksList: helpersUtils.addTaskToList(tasksList, tasksList.tasks.length, title, description)
    }
  }
  const id = parseInt(idFromRequest, 10);
  if (!Number.isNaN(id)) {
    const task = helpersUtils.findTaskById(tasksList, id);
    return {
      status: task ? responseStatusUtils.responseStatus.NO_CONTENT : responseStatusUtils.responseStatus.CREATED,
      tasksList: task ?
        helpersUtils.updateTaskInList(tasksList, helpersUtils.updateTask(task, title, description)) :
        helpersUtils.addTaskToList(tasksList, id, title, description)
    }
  }
  return {
    status: responseStatusUtils.responseStatus.BAD_REQUEST,
    tasksList: tasksList
  };
};

/**
 * Delete a single task form the list
 * @param tasksList
 * @param idFromRequest
 * @returns {*}
 */
const deleteTask = (tasksList, idFromRequest) => {
  const id = parseInt(idFromRequest, 10);

  if (!Number.isNaN(id)) {
    const task = helpersUtils.findTaskById(tasksList, id);
    return {
      status: task ? responseStatusUtils.responseStatus.OK.response({message: `Task with id ${task.id} deleted successfully`}) :
        responseStatusUtils.responseStatus.ACCEPTED,
      tasksList: task ? helpersUtils.deleteTaskFromList(tasksList, helpersUtils.getTaskPosition(tasksList, task)) : tasksList
    }
  }
  return {
    status: responseStatusUtils.responseStatus.BAD_REQUEST,
    tasksList: tasksList
  };
};

module.exports = {
  getSingleTask,
  updateOrCreateTask,
  deleteTask
};
