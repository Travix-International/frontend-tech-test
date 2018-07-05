'use strict';

const express = require('express');
const app = express();
const tasksContainer = require('./tasks.json');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(express.static(__dirname));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    const task = tasks.Container.find((item) => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task
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
    const task = tasksContainer.tasks.find(item => item.id === id);
    
    if (task !== null) {
      task.title = req.body.title;
      task.description = req.body.description;
      task.isDone = req.body.isDone;
      task.category = req.body.category;
      task.tags = req.body.tags;
      task.subtasks = req.body.subtasks;
      
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
 * POST /task/create/:title/:description
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/', (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    isDone: false,
    tags: req.body.tags || [],
    subtasks: req.body.subtasks || []
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
app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
  
    if (taskIndex + 1) {
      const deletedTask = tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Updated successfully',
        id: deletedTask[0].id
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
