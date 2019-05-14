'use strict';

const app = require('express')();
const tasksContainer = require('./tasks.json');
const uuidv4 = require('uuid');

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
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
app.put('/task/update/:id/:title/:description/:completed', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);

    if (task !== null) {
      task.title = req.params.title;
      task.description = req.params.description;
      task.completed = req.params.completed === "false"? false : true;
      tasksContainer.tasks.splice(taskIndex, 1, task);

      return res.status(200).json({
        message: `Task with id ${id} edited successfully`,
        messageId: uuidv4()
      });
    } else {
      return res.status(404).json({
        message: 'Not found',
        messageId: uuidv4()
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
      messageId: uuidv4()
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
app.post('/task/create/:title/:description', (req, res) => {
  const task = {
    id: tasksContainer.tasks.length,
    title: req.params.title,
    description: req.params.description,
    completed: false
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    message: `Task with id ${task.id} created successfully!`,
    messageId: uuidv4()
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
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: `Task with id ${id} deleted successfully`,
        messageId: uuidv4()
      });
    } else {
      return res.status(404).json({
        message: 'Not found',
        messageId: uuidv4()
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
      messageId: uuidv4()
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
