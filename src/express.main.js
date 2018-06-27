// Start coding here
/*
import express from 'express';

const port = process.env.PORT || 3000
const app = express()

app.use('/', express.static('public'))

app.listen(port)

console.log(`my server listening @ http://localhost:${port}`)

*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const tasksContainer = require('../tasks.json');
app.use('/', express.static('public'))


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
    const tasks = tasksContainer.tasks.find((item) => item.id === id);

    if (tasks !== null) {
      return res.status(200).json({
        tasks,
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
app.put('/task/update/:id/:title/:description', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      task.title = req.params.title;
      task.description = req.params.description;
      return res.status(204);
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
app.post('/task/create/:title/:description', (req, res) => {
	//console.log("post request params")
	//console.log(req)
  const task = {
    id: tasksContainer.tasks.length+1,
    title: req.query.title,
    description: req.query.description,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    message: 'Task created',
    tasks: tasksContainer.tasks
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
      const taskIndex = tasksContainer.tasks.indexOf(task);
      const deletedTask = tasksContainer.tasks.splice(taskIndex, 1);

      for(let i=0; i<tasksContainer.tasks.length; i++){
          tasksContainer.tasks[i].id = i + 1;
      }

      return res.status(200).json({
        message: 'Updated successfully',
        tasks: tasksContainer.tasks
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

app.listen(port, () => {
  console.log(`my server listening @ http://localhost:${port}`)
});

