'use strict';

const app = require('express')();
const bodyParser = require("body-parser");

const tasksContainer = require('./tasks.json');


app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
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
    const task = tasks.Container.find((item) => item.id === id);

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
 * PUT /task/update
 * 
 * id: Number
 * title: string
 * description: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If both title and description is empty, return as status code 400.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {

    if(!req.body.title && !req.body.description) {
      return res.status(400).json({
        error: "Bad request",
        message: "title or description is required"
      });
    }

    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      task.title = req.body.title;
      task.description = req.body.description;
      return res.status(204);
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
 * POST /task/create/
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * If both title and description is empty, return a status code 400.
 * Else return status code 200.
 */
app.post('/task/create', (req, res) => {

  if(!req.body.title && !req.body.description) {
    return res.status(400).json({
      error: "Bad request",
      message: "title or description is required"
    });
  }

  const task = {
    id: tasksContainer.tasks.length+1,
    title: req.body.title,
    description: req.body.description,
  };

  tasksContainer.tasks.push(task);

  return res.json({
    task,
    message: 'Resource created',
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
app.delete('/task/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
  
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
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
