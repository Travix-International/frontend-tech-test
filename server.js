'use strict';

const app = require('express')();
const tasksContainer = require('./tasks.json');
const bodyParser = require('body-parser');

// Setting initial id;
let taskNextId = tasksContainer.tasks.length;
// parse application/json
app.use(bodyParser.json())

// Enabling cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/task', (req, res) => {
  return res.status(200).json(tasksContainer);
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

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item) => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});

/**
 * PUT /task/:id/:title/:description
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
app.put('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const keysAllowed = ['title', 'description', 'done'];

  if(!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if(task) {
      Object.keys(req.body).forEach((key) => {
        if(keysAllowed.indexOf(key) !== -1) {
          task[key] = req.body[key];
        }
      })
      return res.status(204).send();
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

/**
 * POST /task/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task', (req, res) => {

  if(!req.body.title || !req.body.description) {
    return res.status(400).json({ message: 'Bad request' });
  }

  const task = {
    id: taskNextId,
    title: req.body.title,
    description: req.body.description,
  };

  tasksContainer.tasks.push(task);
  taskNextId++;

  return res.status(201).json({
    task: task,
  });
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
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task) {
      const taskIndex = tasksContainer.tasks.indexOf(task);
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Deleted successfully',
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

module.exports = app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
