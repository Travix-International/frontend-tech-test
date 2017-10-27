'use strict';

const app = require('express')();
const _ = require('lodash');
const bodyParser = require('body-parser');
const cors = require('cors');
let tasksContainer = require('./tasks.json');

app.use(cors());

app.use(bodyParser.json());


/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  // timeout added to appreciate spinner on the ui
  setTimeout(function(){ 
    return res.status(200).json(tasksContainer);
  }, 500);
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
  // timeout added to appreciate spinner on the ui
  setTimeout(function(){ 
    if (!Number.isNaN(id)) {
      const task = _.find(tasksContainer.tasks, { 'id': id });

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
  }, 500);
});

/**
 * PUT /task/update/:id
 * 
 * id: Number
 * title: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 200 and the resource.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id', (req, res) => {

  const id = parseInt(req.params.id, 10);
  // timeout added to appreciate spinner on the ui
  setTimeout(function(){ 
    if (!Number.isNaN(id)) {
      let task = _.find(tasksContainer.tasks, { 'id': id });
      if (task) {
        task.task = req.body.task;
        tasksContainer.tasks = tasksContainer.tasks.map(item => (item.id === id) ? task : item);
        return res.status(200).json({
          message: 'Updated successfully',
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
  }, 500);
});

/**
 * POST /task/create
 * 
 * title: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title.
 * Return status code 201 and the resource..
 */
app.post('/task/create/', (req, res) => {
  let newId;

  try {
    newId = tasksContainer.tasks[tasksContainer.tasks.length - 1].id + 1;
  }catch(e) {
    newId = 1;
  }

  const task = {
    id: newId,
    task: req.body.task,
  };
  tasksContainer.tasks.push(task);
  // timeout added to appreciate spinner on the ui
  setTimeout(function(){ 
    return res.status(201).json({
      message: 'Resource created',
      task
    });
  }, 500);
});

/**
 * DELETE /task/delete/:id
 * 
 * id: Number
 * 
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 200.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  // timeout added to appreciate spinner on the ui
  setTimeout(function(){ 
    if (!Number.isNaN(id)) {
      const task = _.find(tasksContainer.tasks, { 'id': id });
    
      if (task) {
        _.remove(tasksContainer.tasks, { 'id': id });
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
  }, 300);
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
