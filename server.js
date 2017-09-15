'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const tasks = require('./tasks.json');

app.use(bodyParser.json());

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/task', (req, res) => {
  return res.status(200).json(tasks);
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
    const task = tasks.find((item) => item.id === id);

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
app.put('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasks.find(item => item.id === id);

    if (task !== undefined) {
      task.title = req.body.title;
      task.completed = req.body.completed;
      return res.status(204).end();
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
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task', (req, res) => {
  if (!req.body || !req.body.title) {
    return res.status(400).json({
      message: 'Bad request. Missing title parameter.'
    });
  }

  const task = {
    id: +new Date(),
    title: req.body.title,
    completed: false
  };

  tasks.push(task);

  return res.status(201).json(task);
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
app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasks.findIndex(item => item.id === id);

    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Updated successfully',
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
