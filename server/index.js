'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const paramIdValidator = require('./middleware/id-param-validator').idParamValidator;

const adapter = new FileSync('./data/tasks.json');
const db = low(adapter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  const tasks = db.get('tasks').value();
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
app.get('/task/:id', paramIdValidator, (req, res) => {
  const taskId = req.params.id;
  const task = db.get('tasks').find({ id: taskId }).value();

  if (task) {
    return res.status(200).json(task);
  }

  return res.status(404).json({
    message: 'Not found.',
  });
});

/**
 * PUT /task/update/:id
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
app.put('/task/update/:id', paramIdValidator, (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const taskId = req.params.id;
  const task = db.get('tasks').find({ id: taskId });

  if (task) {
    const updatedTask = task.assign({ title, description }).write();
    return updatedTask
      ? res.status(200).json({
        message: 'Updated successfully',
      })
      : res.status(500).json({
        message: 'Internal server error',
      });
  }

  return res.status(404).json({
    message: 'Not found',
  });
});

/**
 * POST /task/create
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the tasks array with the given title and description.
 * Return status code 201.
 */
app.post('/task/create', (req, res) => {
  const tasks = db.get('tasks');
  const tasksSize = tasks.size().value();
  const newTask = {
    id: (tasksSize + 1).toString(),
    title: req.body.title,
    description: req.body.description
  };
  const createdTask = tasks.push(newTask).write();

  return createdTask.length > 0
    ? res.status(201).json({
      message: 'Created successfully',
    })
    : res.status(500).json({
      message: 'Internal server error',
    });
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
app.delete('/task/delete/:id', paramIdValidator, (req, res) => {
  const taskId = req.params.id;
  const tasks = db.get('tasks');
  const task = tasks.find({ id: taskId });

  if (task) {
    const removedTask = tasks.remove({ id: taskId }).write();

    return removedTask.length > 0
      ? res.status(200).json({
        message: 'Removed successfully',
      })
      : res.status(500).json({
        message: 'Internal server error',
      });
  }

  return res.status(404).json({
    message: 'Not found',
  });
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
