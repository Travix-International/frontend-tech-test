const {notFound, badRequest, noContent, created, okWithJsonContent} = require('../utils/response.utils');
const {findTaskById, createTask, updateTask, getTaskPosition} = require('../utils/helpers.utils');

/**
 * Retrieve the full list of tasks.
 * @param res - response to the client
 * @returns {function(*=): (any | Promise<any>)} - a function returning a json containing the list of tasks
 */
const getAllTasks = (res) => (tasksFromFile) => {
  return res.status(200).json(tasksFromFile);
}

/**
 * Retrieve single task
 * @param req - request from the client
 * @param res - response to the client
 * @returns {Function} - a function returning a json containing the requested task
 */
const getSingleTask = (req, res) => (tasksList) => {
  const id = parseInt(req.params.id, 10);
  const findRequestedTaskAndCreateResponse = () => {
    const task = findTaskById(tasksList, id); // check if bind is needed
    return task ? okWithJsonContent(res)({task}) : notFound(res);
  }
  Number.isNaN(id) ? badRequest(res) : findRequestedTaskAndCreateResponse();
}

/**
 * Utility to create or update a task. This will be used as handler for both POST and PUT
 * @param req
 * @param res
 * @returns {Function}
 */
const updateOrCreateTask = (req, res) => (tasksList) => {
  const updateTaskAndSendNoContent = (task) => {
    // TODO: try to improve this part!!!
    const taskIdx = getTaskPosition(tasksList, task);
    task = updateTask(task, req.params.title, req.params.description);
    tasksList.tasks[taskIdx] = task;
    return noContent(res);
  };
  const addTaskAndSendCreated = (id) => {
    tasksList.tasks.push(createTask(id ? id : tasksList.tasks.length, req.params.title, req.params.description));
    return created(res);
  }
  if (!req.params.id) {
    return addTaskAndSendCreated();
  }
  const id = parseInt(req.params.id, 10);
  if (!Number.isNaN(id)) {
    const task = findTaskById(tasksList, id);
    return task ? updateTaskAndSendNoContent(task) : addTaskAndSendCreated(id);
  }
  return badRequest(res);
}

const deleteTask = (req, res) => (tasksList) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = findTaskById(tasksList, id);
    const removeTaskFromListAndSendOk = (task) => {
      const taskIndex = getTaskPosition(tasksList, task);
      tasksList.tasks.splice(taskIndex, 1);
      return okWithJsonContent(res)({message: 'Updated successfully'});
    }
      return task ? removeTaskFromListAndSendOk(tasksList) : notFound(res);
  }
  return badRequest(res);
}

module.exports = {
  getAllTasks,
  getSingleTask,
  updateOrCreateTask,
  deleteTask
};
