'use strict';

const app = require('express')();
const fs = require('fs');
const tasksContainer = require('./tasks.json');
const { Logger, configureConsoleTransport } = require('travix-logger');

const logger = new Logger({
  transports: [
    configureConsoleTransport()
  ]
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

const jsonWrite = (data, callback) => {
  const fs = require('fs');
  fs.writeFile('tasks.json', JSON.stringify(data), 'utf8', callback);
}

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  logger.info('GET', '', { date: new Date() });
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
    const task = tasksContainer.tasks.find((item) => item.id === id);

    if (task !== null) {
      logger.info('GET', task, { date: new Date() });
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
app.put('/task/update/:id/:title/:description?', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task) {
      task.title = req.params.title;
      task.description = req.params.description;
      return jsonWrite(tasksContainer, () => {
        logger.info('PUT', task, { date: new Date() });
        return res.status(201).json({
          message: 'Resource updated',
        });
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
 * PATCH /task/update/:id/:title/:description
 *
 * Toggle the task status.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.patch('/task/update/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task) {
      task.status = !task.status;
      return jsonWrite(tasksContainer, () => {
        logger.info('PATCH', task, { date: new Date() });
        return res.status(200).json({
          message: 'Resource updated',
        });
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
app.post('/task/create/:title/:description?', (req, res) => {
  const id = (tasksContainer.tasks.length + 1) || 0;

  const nextId = (id) => {
    if (tasksContainer.tasks.find(item => item.id === id)) {
      return nextId(id + 1)
    }
    return id
  };

  const task = {
    id: nextId(id),
    title: req.params.title,
    description: req.params.description,
    status: false,
  };

  tasksContainer.tasks.push(task);
  return jsonWrite(tasksContainer, () => {
    logger.info('POST', task, { date: new Date() });
    return res.status(201).json(task);
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
    const remainingTasks = tasksContainer.tasks.filter(item => item.id !== id);

    if (remainingTasks.length !== tasksContainer.tasks.length) {
      tasksContainer.tasks = remainingTasks;
      return jsonWrite(tasksContainer, () => {
        logger.info('DELETE', id, { date: new Date() });
        return res.status(200).json({
          message: 'Task deleted',
        });
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
 * PUT /task/reset
 *
 * Clean task list.
 */
app.put('/task/reset', (req, res) => {
  tasksContainer.tasks = []
  jsonWrite(tasksContainer, () => {
    logger.info('UPDATE', '', { date: new Date() });
    return res.status(201).json({
      message: 'Resource reseted',
    });
  });
});

app.listen(9001, () => {
  logger.info('START', 'The server is available on http://localhost:9001/\n', { date: new Date() });
});
