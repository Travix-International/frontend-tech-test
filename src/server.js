'use strict';

const app = require('express')();
const TasksServer = require('./Utilities/TasksServer.js');
const tasksContainer = require('./tasks.json');
const path = require('path');

const tasksServer = new TasksServer(tasksContainer);

const indexHTMLFilename = path.join(path.resolve(__dirname), 'index.html');
const bundleFilename = path.join(path.resolve(__dirname), '../dist/bundle.js');

/**
 * Order all task by id to avoid errors
 */
tasksContainer.tasks = tasksContainer.tasks.sort((a, b) => {
  const aID = parseInt(a.id, 10);
  const bID = parseInt(b.id, 10);
  let order = 0;

  if (aID < bID) {
    order = -1;
  } else if (aID > bID) {
    order = 1;
  }

  return order;
});

/**
 * Returns the next ID to be used on a task
 * @returns {Number}
 */
const getTasksNextID = () => {
  const totalSize = tasksContainer.tasks.length;
  const lastTask = tasksContainer.tasks[totalSize - 1];
  const lastID = parseInt(lastTask.id, 10);
  return (Number.isNaN(lastID) ? totalSize : lastID) + 1;
};

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksServer.getAll());
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
  const id = tasksServer.parseId(req.params.id);
  let response = null;

  if (tasksServer.idIsValid(id)) {
    const task = tasksServer.find(id);

    if (task !== null) {
      response = res.status(200).json({
        task,
      });
    } else {
      response = res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    response = res.status(400).json({
      message: 'Bad request.',
    });
  }

  return response;
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
  const id = tasksServer.parseId(req.params.id);
  let response = null;

  if (tasksServer.idIsValid(id)) {
    const task = tasksServer.find(id);

    if (task !== null) {
      tasksServer.update(task, req.params.title, req.params.description);

      response = res.status(200).json({
        message: 'Task updated correctly',
        task
      });
    } else {
      response = res.status(404).json({
        message: 'Task to update Not found',
      });
    }
  } else {
    response = res.status(400).json({
      message: 'Bad request.',
    });
  }

  return response;
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
  const task = tasksServer.add(
    req.params.title,
    req.params.description
  );

  return res.status(201).json({
    message: 'Task created',
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
  const id = tasksServer.parseId(req.params.id);
  let response = null;

  if (tasksServer.idIsValid(id)) {
    const taskIndex = tasksServer.findIndex(id);

    if (taskIndex !== -1) {
      tasksServer.delete(taskIndex);
      response = res.status(200).json({
        message: 'Delete successfully',
      });
    } else {
      response = res.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    response = res.status(400).json({
      message: 'Bad request: invalid id',
    });
  }

  return response;
});

/* Bundle entry point */
app.get(/bundle\.js$/, (req, res) => {
  res.sendFile(bundleFilename);
});

/* Application entry point */
app.get('/', (req, res) => {
  res.sendFile(indexHTMLFilename);
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
