'use strict';

function max(collection, property) {
  return collection.reduce((prev, current) => {
    if (current[property] > prev) {
      prev = current[property];
    }

    return prev;
  }, 0);
}

const app = require('express')();
const bodyParser = require('body-parser');
const tasksContainer = require('./tasks.json');

// CORS
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.set('Access-Control-Allow-Headers', '*');
  next();
});

app.use(bodyParser.json());

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksContainer.tasks);
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
app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Bad request.' });
  }

  const task = tasksContainer.tasks.find(item => item.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Not found.' });
  }

  return res.status(200).json(task);
});

/**
 * PUT /task/:id
 *
 * id: Number
 *
 * Body:
 * - title: string (optional)
 * - description: string (optional)
 * - completed: boolean (optional)
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'The ID should be a number' });
  }

  const task = tasksContainer.tasks.find(item => item.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Not found' });
  }

  task.title = req.body.title === undefined
    ? task.title
    : req.body.title;

  task.description = req.body.description === undefined
    ? task.description
    : req.body.description;

  task.completed = req.body.completed === undefined
    ? task.completed
    : !!req.body.completed;

  return res.sendStatus(204);
});

/**
 * POST /task
 *
 * Body:
 * - title: string
 * - description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'You should send title and description' });
  }

  const id = max(tasksContainer.tasks, 'id') + 1;

  tasksContainer.tasks.push({
    id,
    title,
    description,
    completed: false,
  });

  return res.status(201).json({ message: 'Resource created', id });
});

/**
 * DELETE /task/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isNaN(id)) {
    const exists = !!tasksContainer.tasks.find(item => item.id === id);

    if (exists) {
      tasksContainer.tasks = tasksContainer.tasks.filter(task => task.id !== id);
      return res.status(200).json({
        message: 'Updated successfully',
      });
    } else {
      return res.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
