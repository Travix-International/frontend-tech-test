const express = require('express');

const app = express();
const tasksContainer = require('./tasks.json');
const path = require('path');
const bodyParser = require('body-parser');

/*
  Data model:
  tasks: [{
    id: :number,
    title: :string,
    description: :string,
    completed: :boolean,
    deleted: :boolean
  }]
*/

const removeDeletedProp = (item) => {
  const itemClone = Object.assign({}, item);
  delete itemClone.deleted; // We don't need the Front-end to know if a key has been deleted.

  return itemClone;
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use(express.static(path.join(__dirname, './dist')));

/**
 * GET /api/tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/api/tasks', (req, res) =>
  res.status(200).json({
    meta: { message: 'SUCCESS' },
    data: tasksContainer.tasks.filter(item => !item.deleted).map(item => removeDeletedProp(item)),
  }));

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
    const task = tasksContainer.tasks.find(item => item.id === id && !item.deleted);

    if (task !== null && typeof task !== 'undefined') {
      return res.status(200).json({
        meta: { message: 'SUCCESS' },
        data: removeDeletedProp(task),
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
 *
 * Added: Remove id, title and description from URL. Makes for shorter URLs and
 * PUT requests don't need to be cached.
 */
app.put('/api/task/update/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id && !item.deleted);

    if (task !== null && typeof task !== 'undefined') {
      if (typeof req.body.title !== 'undefined') {
        task.title = req.body.title;
      }

      if (typeof req.body.description !== 'undefined') {
        task.description = req.body.description;
      }

      if (typeof req.body.completed !== 'undefined') {
        task.completed = req.body.completed;
      }

      return res.status(200).json({
        meta: { message: 'RESOURCE_UPDATED' },
        data: removeDeletedProp(task),
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
 * POST /api/task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 *
 * Added: Remove title and description from URL, makes for shorter URLs and POST requests
 * don't need to be cached.
 */
app.post('/api/task/create/:title/:description', (req, res) => {
  const task = {
    id: tasksContainer.tasks.length,
    title: req.params.title,
    description: req.params.description,
    completed: false,
    deleted: false,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    meta: {
      message: 'RESOURCE_CREATED',
    },
    data: removeDeletedProp(task),
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
    const task = tasksContainer.tasks.find(item => item.id === id && !item.deleted);

    if (task !== null && typeof task !== 'undefined') {
      // const taskIndex = tasksContainer.tasks;
      // tasksContainer.tasks.splice(taskIndex, 1);
      task.deleted = true;

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
