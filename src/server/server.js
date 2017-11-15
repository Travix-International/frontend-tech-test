'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

const tasksContainer = require('./tasks.json');


app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      next();
  });

app.set('port', (process.env.PORT || 9001));

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
app.put('/task/update/:id/:title/:description', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);
    if (task !== null) {
      task.title = req.params.title;
      task.description = req.params.description;
      return res.status(204).json({});
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
 * POST /task/create/:title/:description
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create/:title/:description', (req, res) => {
  var maxId = Math.max.apply(Math,tasksContainer.tasks.map(function(task){return task.id;}));
  const task = {
    id:  (isNaN(maxId) || !isFinite(maxId) ? 0 : maxId + 1),
    title: req.params.title,
    description: req.params.description,
  };

  tasksContainer.tasks.push(task);
 // fs.writeFile('tasks.json', JSON.stringify(tasksContainer.tasks), 'utf8', callback)

  return res.status(201).json({
    message: 'Resource created',
    task
  });
});

function callback()
{}

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
    if (taskIndex !== null) {
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Updated successfully',
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

app.listen(app.get('port'), () => {
  process.stdout.write('the server is available on http://localhost:' + app.get('port') + '/\n');
});
