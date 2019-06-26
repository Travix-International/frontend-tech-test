'use strict';
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  tasks = require('./tasks.js'),
  tasksContainer = { tasks: tasks.tasks },
  createId = tasks.createId;
app.use(bodyParser.json(), function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const isValidTask = task => {
  const { id, title, description } = task;
  return (
    !Number.isNaN(id) &&
    !!title && //null, undefined or empty string
    !!description &&
    typeof title === 'string' &&
    typeof description === 'string'
  );
};
const badRequest = response =>
  response.status(400).json({
    message: 'Bad request',
    error: true,
  });
const notFound = response =>
  response.status(404).json({
    message: 'Not found.',
    error: true,
  });

const PAGE_SIZE = 10;

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 * with page parameter
 */
app.get('/tasks/', (req, res) => {
  const page = parseInt(req.query.page);
  if (isNaN(page)) {
    return badRequest(res);
  }
  const start = (page - 1) * PAGE_SIZE;
  if (start >= tasksContainer.tasks.length) {
    return notFound(res);
  }
  return res.status(200).json({
    data: tasksContainer.tasks.slice(
      start,
      start + PAGE_SIZE
    ),
    page: {
      current: page,
      total: Math.ceil(
        tasksContainer.tasks.length / PAGE_SIZE
      ),
    },
  });
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
    const task = tasks.Container.find(
      item => item.id === id
    );

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    } else {
      return notFound(res);
    }
  } else {
    return badRequest(res);
  }
});

/**
 * PUT /task
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task', (req, res) => {
  if (isValidTask(req.body || {})) {
    const { id, title, description, done } = req.body || {};
    const task = tasksContainer.tasks.find(
      item => item.id === id
    );
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // Array.prototype.find returns undefined
    if (task !== undefined) {
      task.title = title;
      task.description = description;
      task.done = done;
      return res.status(200).json(task);
    } else {
      return notFound(res);
    }
  } else {
    return badRequest(res);
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
app.post('/task', (req, res) => {
  const { title, description, done } = req.body || {};
  const task = {
    id: createId(),
    title,
    description,
    done,
  };
  if (isValidTask(task || {})) {
    tasksContainer.tasks.push(task);
    return res.status(201).json(task);
  }
  return badRequest(res);
});

/**
 * DELETE /task
 *
 * body:task
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task', (req, res) => {
  const taskId = Number(req.body.id);
  if (!isNaN(taskId)) {
    const task = tasksContainer.tasks.find(
      item => item.id === taskId
    );
    if (task !== undefined) {
      tasksContainer.tasks = tasksContainer.tasks.filter(
        ({ id }) => id !== taskId
      );
      return res.status(200).json(task);
    } else {
      return notFound(res);
    }
  } else {
    return badRequest(res);
  }
});

app.listen(9001, () => {
  process.stdout.write(
    'the server is available on http://localhost:9001/\n'
  );
});
