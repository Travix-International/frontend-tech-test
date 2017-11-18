'use strict';

const express = require('express');
const fs = require('fs');

const apiPaths = require('./serverPaths');
const tasksContainer = require('./tasks.json');
const app = express();
const STATIC = 'build'

/**
 * Gets the current (in-menory) task list
 * and writes to file
 */
function writeToFile() {
  const stringified = JSON.stringify(tasksContainer, null, 2);

  return new Promise((resolve, reject) => {
    fs.writeFile(
      './tasks.json',
      stringified,
      (error) => {
        if(error) reject(error);

        resolve();
      });
  })
}

app.use(express.static(STATIC))

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get(apiPaths.TASKS, (req, res) => {
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
app.get(`${apiPaths.TASKS}/:id`, (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item) => item.id === id);

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
app.put(`${apiPaths.UPDATE}/:id/:title/:description`, (req, res) => {
  let { id, title, description } = req.params
  id = parseInt(id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);

    if (taskIndex !== null) {
      tasksContainer.tasks[taskIndex] = { id, title, description };

      writeToFile()
        .then(() => {
          res.status(204).json();
        })
        .catch(error => {
          res.status(501).json({
            message: error,
          })
        })
    } else {
      res.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    res.status(400).json({
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
app.post(`${apiPaths.CREATE}/:title/:description`, (req, res) => {
  const task = {
    id: tasksContainer.tasks.length,
    title: req.params.title,
    description: req.params.description,
  };

  tasksContainer.tasks.push(task);

  writeToFile()
    .then(() => {
      res.status(201).json({
        message: 'Resource created',
      });
    })
    .catch(error => {
      res.status(501).json({
        message: error,
      });
    })
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
app.delete(`${apiPaths.DELETE}/:id`, (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);

    if (taskIndex !== null) {
      tasksContainer.tasks.splice(taskIndex, 1);

      writeToFile()
        .then(() => {
          res.status(201).json({
            message: 'Updated successfully',
          });
        })
        .catch(error => {
          res.status(501).json({
            message: error,
          });
        })
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

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
