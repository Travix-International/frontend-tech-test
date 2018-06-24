'use strict';

const app = require('express')();
const { tasks } = require('./tasks.json');
const taskMiddleware = require('./taskMiddleware');
const cors = require('cors');

// Enable cors
app.use(cors());

/**
 * GET /
 *
 * Redirect to tasks
 */
app.get('/', (req, res) => {
  return res.redirect('/tasks');
});

/**
 * GET /tasks
 *
 * ?limit: Number
 * ?page: Number
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  const { limit = 0, page = 1 } = req.query;
  const sample = limit ? tasks.slice(limit * (page - 1), limit * page) : tasks;
  return res.status(200).json({
    tasks: sample,
    total: sample.length,
    limit,
    page,
  });
});

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/task/:id', taskMiddleware, (req, res) => {
  return res.status(200).json({
    task: res.locals.task,
  });
});

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id/:title/:description', taskMiddleware, (req, res) => {
  res.locals.task.title = req.params.title;
  res.locals.task.description = req.params.description;
  return res.status(204);
});

/**
 * PUT /task/toggle_state/:id
 *
 * id: Number
 *
 * Toggle task between completed or incompleted
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/toggle_state/:id', taskMiddleware, (req, res) => {
  res.locals.task.completed = !res.locals.task.completed;
  return res.status(204);
});

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array taskContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create/:title/:description', (req, res) => {
  const task = {
    // Determine the new id based on the maximum defined id, because if I define the id based on
    // tasks.length, when the user delete one task the length can be the same than an existing id
    id: tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 0,
    title: req.params.title,
    description: req.params.description,
    completed: false,
  };

  tasks.unshift(task);

  return res.status(201).json({
    task,
  });
});

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete/:id', taskMiddleware, (req, res) => {
  const taskIndex = tasks.indexOf(res.locals.task);
  // Check for valid taskIndex
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return res.status(200).json({
      message: 'Updated successfully',
    });
  }
  // taskIndex is invalid
  return res.status(404).json({
    message: 'Not found',
  });
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});

module.exports = app;
