const express = require('express');

const utils = require('./utils');

// Initialize Express application
const app = express();

// JSON payload parser (middleware)
app.use(express.json());

// Read tasks from file
let tasks = utils.readTasks();

/**
 * GET /api/tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/api/tasks', (req, res) => {
  return res.status(200).json(tasks);
});

/**
 * Get /api/tasks/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  // Bad request
  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request.'
    });
  }

  const task = tasks.find(item => item.id === id);

  // Task not found
  if (typeof task === 'undefined') {
    return res.status(404).json({
      message: 'Resource not found.'
    });
  }

  return res.status(200).json({
    task
  });
});

/**
 * PUT /api/tasks/:id/:title/:description
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
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request'
    });
  }

  const taskIndex = tasks.findIndex(item => item.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: 'Resource not found'
    });
  }

  const task = tasks[taskIndex];

  task.title = req.body.title;
  task.description = req.body.description;

  tasks[taskIndex] = task;

  utils.writeTasks(tasks);

  return res.status(200).json({ message: 'Resource updated', task });
});

/**
 * POST /api/tasks/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasks with the given title and description.
 * Return status code 201.
 */
app.post('/api/tasks', (req, res) => {
  // TODO: Check for well formed request body

  // Get next task ID: (maxId + 1) or 1 if array is empty.
  const nextId =
    tasks.reduce((maxId, b) => {
      return Math.max(maxId, b.id);
    }, 0) + 1;

  const task = {
    id: nextId,
    title: req.body.title,
    description: req.body.description
  };

  tasks.push(task);
  utils.writeTasks(tasks);

  return res.status(201).json({
    message: 'Resource created',
    task: task
  });
});

/**
 * DELETE /api/tasks/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request'
    });
  }

  const taskIndex = tasks.findIndex(item => item.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: 'Resource not found'
    });
  }

  tasks.splice(taskIndex, 1);
  utils.writeTasks(tasks);

  return res.status(200).json({
    message: 'Resource deleted'
  });
});

app.listen(process.env.LISTENER_PORT || 9001, () => {
  process.stdout.write('Server listening on http://localhost:9001/\n');
});
