'use strict';
var express = require('express'); // ExperssJS Framework
var path = require('path'); // Import path module

const app = require('express')();
const tasksContainer = require('./tasks.json');

app.use(express.static(__dirname + '/public')); // Allow front end to access public folder

// Set Application Static Layout
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html')); // Set index.html as layout
});

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  // return res.status(200).json(tasksContainer);

  return res.status(200).json({success:true, tasks:tasksContainer.tasks});
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
      return res.status(200).json({
        success: true, task:task
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
      return res.status(200).json({
        success: true,
        message: 'Updated!',
        task: task
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
app.post('/task/create/:title/:description', (req, res) => {
  var new_id;
  var numberOfTasks = tasksContainer.tasks.length;
  if(numberOfTasks > 0){
    var last_id = tasksContainer.tasks[numberOfTasks -1].id;
    new_id = last_id +1;
  }else{
    new_id = 0;
  }

  const task = {
    id: new_id,
    title: req.params.title,
    description: req.params.description,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    success: true, message: 'Resource created', task: task
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
        success: true, message: 'Updated successfully',
      });
    } else {
      return es.status(404).json({
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
