'use strict';

const app = require('express')();
const tasksHandlers = require('./server/handlers/tasks.handlers');

let tasksContainer = require('./tasks.json');

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => tasksHandlers.getAllTasks(res)(tasksContainer));

/**
 * Get /tasks/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/tasks/:id', (req, res) => tasksHandlers.getSingleTask(req, res)(tasksContainer));

/**
 * PUT /tasks/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, add a new task (HTTP PUT behaviour) and returns a status code 201.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/tasks/:id/:title/:description', (req, res) => {
  const result = tasksHandlers.updateOrCreateTask(req, res)(tasksContainer);
  tasksContainer = result.tasksList;
  return result.status;
});

/**
 * POST /tasks/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/tasks/:title/:description', (req, res) => {
  const result = tasksHandlers.updateOrCreateTask(req, res)(tasksContainer);
  tasksContainer = result.tasksList;
  return result.status;
});

/**
 * DELETE /tasks/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/tasks/:id', (req, res) => {
  const result = tasksHandlers.deleteTask(req, res)(tasksContainer);
  tasksContainer = result.tasksList;
  return result.status;
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
