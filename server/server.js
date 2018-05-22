'use strict';

const app = require('express')();
const cors = require('cors');
const { responseStatus } = require('./utils/response-status.util');
const tasksHandlers = require('./handlers/tasks.handlers');

let tasksContainer = require('./tasks.json') || {tasks: []};

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Cache-Control',
    'Expires'
  ]
}

app.use(cors(corsOptions));

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
  app.get('/tasks', (req, res) => responseStatus.OK.response(tasksContainer)(res));

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
app.get('/tasks/:id', (req, res) => tasksHandlers.getSingleTask(tasksContainer, req.params.id).status.response(res));

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
  const result = tasksHandlers.updateOrCreateTask(tasksContainer, req.params.title, req.params.description, req.params.id);
  tasksContainer = {...result.tasksList};
  return result.status.response(res);
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
  const result = tasksHandlers.updateOrCreateTask(tasksContainer, req.params.title, req.params.description);
  tasksContainer = {...result.tasksList};
  return result.status(res);
});

/**
 * DELETE /tasks/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 200.
 * If the task is not found, return a status code 202.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/tasks/:id', (req, res) => {
  const result = tasksHandlers.deleteTask(tasksContainer, req.params.id);
  tasksContainer = {...result.tasksList};
  return result.status.response(res);
});

app.listen(9002, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});

module.exports = {app, tasksContainer};
