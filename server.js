const express = require('express');

const app = express();
const tasksContainer = require('./tasks.json');
const path = require('path');

const taskStatus = {
  active: 'ACTIVE',
  complete: 'COMPLETED',
  deleted: 'DELETED',
};

/*
  Data model:
  tasks: [{
    id: :id,
    title: :title,
    description: :description,
    status: :status,
  }]
*/

app.use(express.static(path.join(__dirname, './dist')));

/**
 * GET /api/tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/api/tasks', (req, res) => {
  const tasks = tasksContainer.tasks.filter(item => item.status !== taskStatus.deleted);

  return res.status(200).json({
    meta: { message: 'SUCCESS' },
    data: tasks,
  });
});

/**
 * Get /api/task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/api/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    // Fix small bug that uses tasks.Container instead of tasksContainer
    // const task = tasks.Container.find(item => item.id === id);
    const task = tasksContainer.tasks.find(item => item.id === id && item.status !== taskStatus.deleted);

    if (task !== null && typeof task !== 'undefined' && task.status) {
      return res.status(200).json({
        meta: { message: 'SUCCESS' },
        data: task,
      });
    }
    return res.status(404).json({
      meta: { message: 'RESOURCE_NOT_FOUND' },
      data: {},
    });
  }
  return res.status(400).json({
    meta: { message: 'BAD_REQUEST' },
    data: {},
  });
});

/**
 * PUT /api/task/update/:id/:title/:description
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
app.put('/api/task/update/:id/:title/:description/:status', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id && item.status !== taskStatus.deleted);

    if (task !== null && typeof task !== 'undefined') {
      task.title = req.params.title;
      task.description = req.params.description;
      task.status = req.params.status;

      return res.status(200).json({
        meta: { message: 'RESOURCE_UPDATED' },
        data: task,
      });
    }
    return res.status(404).json({
      meta: { message: 'RESOURCE_RESOURCE_NOT_FOUND' },
      data: {},
    });
  }
  return res.status(400).json({
    meta: { message: 'BAD_REQUEST' },
    data: {},
  });
});

/**
 * POST /api/task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/api/task/create/:title/:description', (req, res) => {
  const task = {
    id: tasksContainer.tasks.length,
    title: req.params.title,
    description: req.params.description,
    status: taskStatus.active,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    meta: {
      message: 'RESOURCE_CREATED',
    },
    data: task,
  });
});

/**
 * DELETE /api/task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 200.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/api/task/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id && item.status !== taskStatus.deleted);

    if (task !== null && typeof task !== 'undefined') {
      // const taskIndex = tasksContainer.tasks;
      // tasksContainer.tasks.splice(taskIndex, 1);
      task.status = taskStatus.deleted;

      return res.status(200).json({
        meta: { message: 'RESOURCE_DELETED' },
        data: {},
      });
    }
    return res.status(404).json({
      meta: { message: 'RESOURCE_NOT_FOUND' },
      data: {},
    });
  }
  return res.status(400).json({
    meta: { message: 'BAD_REQUEST' },
    data: {},
  });
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

const server = app.listen(9001, () => {
  process.stdout.write('\n\n\n\nThe server is available on http://localhost:9001/\n');
});

module.exports = server;
