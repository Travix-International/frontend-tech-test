'use strict';
const app = require('express')();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');

const tasksContainer = require('./tasks.json');

app.use(cors({
  "origin": "*",
  "methods": "GET, HEAD, PUT, POST, DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204
}));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(morgan('combined'));

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksContainer);
});

/**
 * Get /task
 * 
 * id: string
 * 
 * Return the task for the given id.
 * 
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/task', (req, res) => {
  const id = req.query.id;

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task !== null) {
    return res.status(200).json({
      todo: task,
    });
  } else {
    return res.status(404).json({
      error: { message: 'Not found.' },
    });
  }
});

/**
 * PUT /task/update
 * 
 * id: string
 * title: string
 * description: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update', (req, res) => {
  const id = req.body.id;
  const task = tasksContainer.tasks.find(item => item.id === id);

  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;
    return res.status(200).json({
        message: 'Updated successfully',
        todo: task,
    });
  } else {
    return res.status(404).json({
      error: { message: 'Not found.' },
    });
  }
});

/**
 * POST /task/create
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create', (req, res) => {
  const task = {
    id: uniqid(),
    title: req.body.title,
    description: req.body.description,
  };

  tasksContainer.tasks.unshift(task);

  return res.status(201).json({
    message: 'Resource created',
    todo: task,
  });
});

/**
 * DELETE /task/delete
 * 
 * id: string
 * 
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete', (req, res) => {
  const id = req.body.id;
  const taskIndex = tasksContainer.tasks.findIndex(item => item.id === req.body.id);

  if (taskIndex > -1) {
    tasksContainer.tasks.splice(taskIndex, 1);

    return res.status(200).json({
      message: 'Removed successfully',
      todo: { id },
    });
  } else {
    return res.status(404).json({
      error: { message: 'Not found.' },
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
