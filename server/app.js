'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid/v1');
const tasksContainer = require('./tasks.json');

// cors
app.use(cors());
// parse body in POST requests and expose on req.body 
app.use(bodyParser.json());
/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksContainer);
});

/**
 * Get /tasks/:id
 * 
 * id: uuid
 * 
 * Return the task for the given id.
 * 
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 */
app.get('/tasks/:id', (req, res) => {
  const task = tasksContainer.tasks.find((item) => item.id === req.params.id);
  if (task) {
    return res.status(200).json({
      task,
    });
  } else {
    return res.status(404).json({
      message: 'Not found.',
    });
  }
});

/**
 * PUT /task/:id
 * 
 * id: uuid
 * 
 * data:
 * title: string
 * description: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided title is empty return a status code 400.
 */
app.put('/tasks/:id', (req, res) => {
  if (req.body.title) {
    const task = tasksContainer.tasks.find(item => item.id === req.params.id);
    if (task) {
      task.title = req.body.title;
      task.description = req.body.description;
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
 * PUT /tasks/:id/toggle
 * 
 * id: uuid
 * 
 * data:
 * done: boolean
 * 
 * Update the task status
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 */
app.put('/tasks/:id/toggle', (req, res) => {
  const task = tasksContainer.tasks.find(item => item.id === req.params.id);

  if (task) {
    task.done = !task.done;
    return res.status(204).send();
  } else {
    return res.status(404).json({
      message: 'Not found',
    });
  }
});

/**
 * POST /tasks
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201 and the newly created resource.
 */
app.post('/tasks', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      message: 'Bad request'
    });
  }

  const task = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description,
    done: false,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    task
  });
});

/**
 * DELETE /tasks/:id
 * 
 * id: Number
 * 
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 */
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasksContainer.tasks.findIndex(item => item.id === req.params.id);

  if (taskIndex > -1) {
    tasksContainer.tasks.splice(taskIndex, 1);
    return res.status(200).json({
      message: 'Updated successfully',
    });
  } else {
    return res.status(404).json({
      message: 'Not found',
    });
  }
});

module.exports = app;