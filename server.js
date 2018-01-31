'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const tasksContainer = require('./tasks.json');

// enable CORS
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT');
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json()); // support json encoded bodies

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return setTimeout(() => res.status(200).json(tasksContainer), 12000);
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
  const id = req.params.id;

  if (id) {
    const task = tasksContainer.find(item => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    }

    return res.status(404).json({
      message: 'Not found.',
    });
  }

  return res.status(400).json({
    message: 'Bad request.',
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
 * If the task is found and update as well, return a status code 200.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const updatedTasks = tasksContainer.tasks.map((item) => {
      if (item.id === id) {
        item.title = req.body.title;
        item.description = req.body.description;
      }

      return item;
    });

    if (updatedTasks !== tasksContainer.tasks) {
      tasksContainer.tasks = updatedTasks;
      return res.status(200).json({
        message: 'Resource created',
        tasks: updatedTasks,
      });
    }

    return res.status(404).json({
      message: 'Not found',
    });
  }

  return res.status(400).json({
    message: 'Bad request',
  });
});

/**
 * POST /task
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task', (req, res) => {
  const task = {
    id: shortid.generate(),
    title: req.body.title,
    description: req.body.description,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    message: 'Resource created',
    task,
  });
});

/**
 * DELETE /task/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 200.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const filteredTasks = tasksContainer.tasks.filter(item => item.id !== id);

    if (filteredTasks.length !== tasksContainer.tasks.length) {
      tasksContainer.tasks = filteredTasks;
      return res.status(200).json({
        message: 'Deleted successfully',
      });
    }

    return res.status(404).json({
      message: 'Not found',
    });
  }

  return res.status(400).json({
    message: 'Bad request',
  });
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
