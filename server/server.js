'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const tasksContainer = require('./tasks.json');

app.use(bodyParser.json()); // for parsing application/json

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

/**
 * GET /task?pn={Number}&tpp={Number}&search={string}
 *
 * pn: Number Page Number
 * tpp: Number Tasks Per Page
 *
 * Return the list of tasks with status code 200.
 * If no query string given it returns all of the tasks
 */
app.get('/task', (req, res) => {
  // Can also use Range header for this
  const pageNumber = parseInt(req.query.pn, 10);
  const tasksPerPage = parseInt(req.query.tpp, 10);
  const searchString = req.query.search;
  let allTasks = tasksContainer.tasks;
  if (searchString !== '') {
    const regex = new RegExp(searchString, 'i');
    allTasks = tasksContainer.tasks.filter(item => regex.test(item.title));
  }

  if (!Number.isNaN(pageNumber) && !Number.isNaN(tasksPerPage)) {
    const start = (pageNumber - 1) * tasksPerPage;
    const end = (pageNumber - 1) * tasksPerPage + tasksPerPage;
    const pagedTasks = allTasks.slice(start, end);
    return res.status(200).json({
      tasks: pagedTasks,
      pageNumber: pageNumber,
      totalRecords: allTasks.length,
    });
  }
  return res.status(200).json({
    tasks: allTasks,
    totalRecords: allTasks.length,
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
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    }
    return res.status(404).json({
      message: 'Not found.',
    });
  }
  return res.status(400).json({
    message: 'Bad request.',
  });
});

/**
 * PUT /task/:id
 *
 * id: Number
 *
 * Update the task with the given id with the fields in request body.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task) {
      const updatedTask = req.body;
      Object.keys(task).forEach(key => {
        if (updatedTask[key]) task[key] = updatedTask[key];
      });
      return res.status(200).json({ task });
    }
    return res.status(404).json({
      message: 'Not found',
    });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
});

/**
 * POST /task
 *
 *
 * Add a new task to the array tasksContainer.tasks with the object in request body.
 * Return status code 201.
 */
app.post('/task', (req, res) => {
  const postedTask = req.body;
  const task = {
    id: tasksContainer.tasks.length,
    title: postedTask.title,
    description: postedTask.description,
  };

  tasksContainer.tasks.push(task);

  return res.status(200).json({ task });
});

/**
 * DELETE /task/:id
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

    if (taskIndex !== -1) {
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(204).end();
    }
    return res.status(404).json({
      message: 'Not found',
    });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
