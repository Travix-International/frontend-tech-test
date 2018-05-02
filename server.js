/* eslint-disable */
'use strict';

const app = require('express')();
var cors = require('cors')
var bodyParser = require('body-parser');
const tasksContainer = require('./tasks.json');
var nextId = 1000

app.use(cors())
app.use(bodyParser.json())

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
 * PUT /task/update/:id/:name/:description
 * 
 * id: Number
 * name: string
 * description: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      task.name = req.body.name;
      task.description = req.body.description;
      task.status = req.body.status;
      task.subTasks = req.body.subTasks;
      return res.status(200).json({
        task
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

/**
 * POST /task/create/:name/:description
 * 
 * name: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given name and description.
 * Return status code 201.
 */
app.post('/task/create', (req, res) => {
  const task = {
    id: nextId++,
    name: req.body.name,
    description: req.body.description,
    status: 'ToDo',
    subTasks: []
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    message: 'Resource created',
    task
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
  
    if (taskIndex >= 0) {
      const task = tasksContainer.tasks[taskIndex]
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Deleted successfully',
        task
      });
    } else {
      return es.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.post('/subtask/create/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);
    const subTask = {
      id: nextId++,
      parentId: id,
      name: req.body.name,
      description: req.body.description,
      status: 'ToDo'
    };

    task.subTasks.push(subTask);

    return res.status(201).json({
      message: 'Resource created',
      subTask,
      task
    });
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.put('/subtask/update/:parentId/:id', (req, res) => {
  const parentId = parseInt(req.params.parentId, 10);
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(parentId) || !Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === parentId);
    if(!task) {
      return res.status(404).json({
        message: 'Not found',
      });
    }

    const subtask = task.subTasks.find(item => item.id === id)
    if(!subtask) {
      return es.status(404).json({
        message: 'Not found',
      });
    }

    subtask.name = req.body.name;
    subtask.description = req.body.description;
    subtask.status = req.body.status;

    return res.status(200).json({
      subtask,
      task
    });
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.delete('/subtask/delete/:parentId/:id', (req, res) => {
  const parentId = parseInt(req.params.parentId, 10);
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(parentId) || !Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === parentId);
    if (!task) {
      return es.status(404).json({
        message: 'Not found',
      });
    }

    const subtaskIndex = task.subTasks.findIndex(item => item.id === id)
    if(subtaskIndex < 0) {
      return es.status(404).json({
        message: 'Not found',
      });
    }

    const subTask = task.subTasks[subtaskIndex]
    task.subTasks.splice(subtaskIndex, 1);
    return res.status(200).json({
      message: 'Deleted successfully',
      subTask,
      task
    });
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

var server = app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});

module.exports = server
/* eslint-enable */
