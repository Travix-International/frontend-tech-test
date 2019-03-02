'use strict';
const bodyParser = require('body-parser')
const fs = require('fs');
const uuidv4 = require('uuid/v4')
const _keys = require('lodash/keys');
const cors = require('cors')
const app = require('express')();
app.use(bodyParser.json())
app.use(cors());

let rawdata = fs.readFileSync('./tasks.json'); 
const taskContainer = JSON.parse(rawdata);
const tasks = taskContainer.tasks.reduce((acc,task)=>{
    acc[task.id] = task;
    return acc;
},{})

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json({data: tasks, totalCount: _keys(tasks).length});
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
    const task = tasks[id]

    if (task !== null) {
      return res.status(200).json({
        data: task,
        totalCount: _keys(tasks).length,
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
app.put('/task/update/:id', (req, res) => {
  const {id} = req.params;

  if (id !== undefined) {
    let task = tasks[id]
    if (task) {
      const {title = '', description = '', } = req.body;
      const updatedTask = { ...task, title, description};
      tasks[id] = updatedTask;
      return res.status(202).json({
        message: 'Resource updated',
        data: updatedTask,
        totalCount: _keys(tasks).length
      });;
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
app.post('/task/create', (req, res) => {
  const { title='', description='', } = req.body;
  const task = {
    id: uuidv4(),
    title,
    description,
  };

  tasks[task.id] = task;

  return res.status(201).json({
    message: 'Resource created',
    data: task,
    totalCount: _keys(tasks).length
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
  const {id} = req.params;

  if (!!id) {
    const task = tasks[id];  
    if (task !== undefined) {
      delete tasks[id];
      return res.status(200).json({
        message: 'Deleted successfully',
        totalCount: _keys(tasks).length
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

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
