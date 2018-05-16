/**
 * Utility to find a task by id in the task list
 * @param tasksList
 * @param idToSearch
 * @returns task object or undefined
 */
const findTaskById = (tasksList, idToSearch) =>
  tasksList && tasksList.tasks && tasksList.tasks.find((el) => el.id === idToSearch);

/**
 * Utility to get the exact position of a task inside the task list
 * @param tasksList
 * @param taskToSearch
 * @returns {number}
 */
const getTaskPosition = (tasksList, taskToSearch) => tasksList.tasks.indexOf(taskToSearch);

/**
 * Utility to create a task
 * @param id
 * @param title
 * @param description
 * @returns {{id: *, title: *, description: *}}
 */
const createTask = (id, title, description) => (
  {
    id: id,
    title: title,
    description: description
  });

/**
 * Utility to update a task
 * @param task
 * @param newTitle
 * @param newDescription
 * @returns {{id: *, title: *, description: *}}
 */
const updateTask = (task, newTitle, newDescription) => (
  {
    ...task,
    title: newTitle,
    description: newDescription
  });

/**
 * Update a task inside the list
 * @param tasksList
 * @param taskToModify
 * @returns {{tasks: []}}
 */
const updateTaskInList = (tasksList, taskToModify) => (
  {
    tasks: tasksList.tasks.map((task) => task.id === taskToModify.id ? taskToModify : task)
  });

/**
 * Add a task to the list
 * @param tasksList
 * @param id
 * @param title
 * @param description
 * @returns {{tasks: []}}
 */
const addTaskToList = (tasksList, id, title, description) => (
  {
    tasks: [
      ...tasksList.tasks,
      createTask(id ? id : tasksList.tasks.length, title, description)
    ]
  });

/**
 * Remove a task from the list
 * @param tasksList
 * @param taskToRemove
 * @returns {T[]}
 */
const deleteTaskFromList = (tasksList, taskToRemove) => (
  {
    tasks: [
      ...tasksList.tasks.slice(0, getTaskPosition(tasksList, taskToRemove)),
      ...tasksList.tasks.slice(getTaskPosition(tasksList, taskToRemove) + 1)
    ]
  });

module.exports = {
  findTaskById,
  getTaskPosition,
  createTask,
  updateTask,
  updateTaskInList,
  addTaskToList,
  deleteTaskFromList
};
