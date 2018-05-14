const {notFound, badRequest} = require("../utils/response.utils");
/**
 * Retrieve the full list of tasks.
 * @param res - response to the client
 * @returns {function(*=): (any | Promise<any>)} - a function returning a json containing the list of tasks
 */
const getAllTasks = (res) => (tasksFromFile) => res.status(200).json(tasksFromFile);

/**
 * Retrieve a specific task
 * @param req - request from the client
 * @param res - response to the client
 * @returns {Function} - a function returning a json containing the requested task
 */
const getSpecificTask = (req, res) => (tasks) => {
  const clonedResponse = {...res};
  const id = parseInt(req.params.id, 10);
  const taskToReturn = (task) => clonedResponse.status(200).json({task});
  // single responsibility principle is violated here??
  const findRequestedTaskAndCreateResponse = () => {
    const task = tasks && tasks.Container && tasks.Container.find((item) => item.id === id);
    return task ? taskToReturn(task) : notFound(res);
  }

  Number.isNaN(id) ? badRequest(res) : findRequestedTaskAndCreateResponse();
}

module.exports = {getAllTasks, getSpecificTask};
