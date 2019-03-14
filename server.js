'use strict';
const express = require('express'); // ExperssJS Framework
const path = require('path'); // Import path module

const app = require('express')();
// const tasksContainer = require('./tasks.json');
const tasksContainer = require('./tasks50.json');

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
  if(tasksContainer.tasks){
    const pageCount = Math.ceil(tasksContainer.tasks.length / 10);
    const totalItems = tasksContainer.tasks.length;
    //sort tasks with id
    const arr = tasksContainer.tasks.sort((a,b)=>{return b.id - a.id});
    return res.status(200).json({
      pageCount: pageCount,
      totalItems: totalItems,
      tasks: arr.slice(0, 10)
    });
  }else{
    return res.status(404).json({
      message: 'Tasks are not found.',
    });
  }
});

app.get('/tasks/:page/:id', (req, res) => {
  if(tasksContainer.tasks){
    const pageCount = Math.ceil(tasksContainer.tasks.length / 10);
    const totalItems = tasksContainer.tasks.length;
    let page = parseInt(req.params.page);
    if (!page) { page = 1;}
    if (page > pageCount) {
      page = pageCount
    }

    const arr = tasksContainer.tasks.sort((a,b)=>{return b.id - a.id});
    const lastIdIndex = arr.findIndex(x=> x.id == req.params.id)
    console.log(lastIdIndex)
    return res.status(200).json({
      page: page,
      pageCount: pageCount,
      totalItems: totalItems,
      tasks: arr.slice(lastIdIndex +1, lastIdIndex + 11)
    });
  }else{
    return res.status(404).json({
      message: 'Tasks are not found.',
    });
  }
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
        task:task
      });
    } else {
      return res.status(404).json({
        message: 'Task is not found.',
      });
    }
  } else {
    return res.status(400).json({
       message: 'Something went wrong.',
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
        message: 'Updated!',
        task: task
      });
    } else {
      return res.status(404).json({
        message: 'Task is not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Something went wrong.',
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
  if(req.params.title && req.params.description){
    let new_id;
    const numberOfTasks = tasksContainer.tasks.length;
    console.log(tasksContainer.tasks);
    //if there are tasks more than 0 assign the greatest number of id +1
    if(numberOfTasks > 0){
      const last_id = Math.max.apply(Math, tasksContainer.tasks.map(function(task) { return task.id; }));
      console.log(last_id)
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
    const totalItems = tasksContainer.tasks.length;

    return res.status(201).json({
      message: 'Resource created', task: task, totalItems: totalItems
    });
  }else{
    return res.status(400).json({
      message: 'Something went wrong.',
    });
  }
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
      const totalItems = tasksContainer.tasks.length;
      return res.status(200).json({
        message: 'Updated successfully', totalItems: totalItems
      });
    } else {
      return res.status(404).json({
        message: 'Task is not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Something went wrong',
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});

