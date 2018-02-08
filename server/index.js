/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

const tasksContainer = require('./tasks.json');

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  res.status(200).json(tasksContainer);
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
app.get('/task/:id', ({ params }, res) => {
  const id = parseInt(params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.find((item) => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task
      });
    }

    return res.status(404).json({
      message: 'Not found.'
    });
  }

  return res.status(400).json({
    message: 'Bad request.'
  });
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
app.put('/task/update/:id/:title/:description', ({ params }, res) => {
  const id = parseInt(params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      task.title = params.title;
      task.description = params.description;

      return res.status(200).json({
        task
      });
    }

    return res.status(404).json({
      message: 'Not found'
    });
  }

  return res.status(400).json({
    message: 'Bad request'
  });
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
app.post('/task/create/:title/:description', ({ params }, res) => {
  const task = {
    id: tasksContainer.tasks.reduce((acc, current) => current.id >= acc ? current.id + 1 : acc, 0),
    title: params.title,
    description: params.description,
  };

  tasksContainer.tasks.unshift(task);

  return res.status(200).json({
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
app.delete('/task/delete/:id', ({ params }, res) => {
  const id = parseInt(params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      tasksContainer.tasks = tasksContainer.tasks.filter(item => item.id !== id);

      return res.status(200).json({
        task
      });
    }

    return res.status(404).json({
      message: 'Not found'
    });
  }

  return res.status(400).json({
    message: 'Bad request'
  });
});

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
