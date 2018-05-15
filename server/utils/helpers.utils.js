/**
 * Utility to find a task by id in the task list
 * @param tasksList
 * @param idToSearch
 * @returns task object or undefined
 */
const findTaskById = (tasksList, idToSearch) =>
  tasksList && tasksList.tasks && tasksList.tasks.find((el) => el.id === idToSearch);

/**
 * Utility to get the exact postion of a task inside the task list
 * @param tasksList
 * @param taskToSearch
 * @returns {number}
 * TODO: FIX ME
 */
const getTaskPosition = (tasksList, taskToSearch) => tasksList.tasks.indexOf(taskToSearch);

/**
 * Utility to create a task
 * @param id
 * @param title
 * @param description
 * @returns {{id: *, title: *, description: *}}
 */
const createTask = (id, title, description) => {
  return {
    id: id,
    title: title,
    description: description
  }
}

/**
 * Utility to update a task
 * @param task
 * @param newTitle
 * @param newDescription
 * @returns {} - new task with new title and description
 */
const updateTask = (task, newTitle, newDescription) => {
  const clonedTask = {...task};
  clonedTask.title = newTitle;
  clonedTask.description = newDescription;
  return clonedTask;
}

module.exports = {
  findTaskById,
  getTaskPosition,
  createTask,
  updateTask
};
