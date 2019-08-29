'use strict';

const app = require('express')();
let tasksContainer = require('./tasks.json');


app.use((req, res, next) => {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT');
  res.set('Access-Control-Allow-Origin', '*');
  next();
});
/**
 *  Modified the structure of storing tasks.
 * Earlier it was an array of tasks. Any CRUD operation resulted in O(n) complexitry for searching the tasks.
 * Moved tasks data structure from array to hashmap with keys of the map being the id of the task.
 * Any lookup on the task is now done in O(1) complexity.
 * */ 

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksContainer[req.query.type]);
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
app.put('/task/update/:id/:title', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const type = req.query.type;
  if (!Number.isNaN(id)) {
    const task = tasksContainer[type] && tasksContainer[type][id];
    if (task !== null) {
      task.title = req.params.title;
      return res.status(204).json({
        task,
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
  const task = {
    id: new Date().getTime(),
    title: req.params.title,
    description: req.params.description,
  };

  const type = req.query.type || 'DRAFT';
  tasksContainer = {
    ...tasksContainer,
    [type]: {
      ...tasksContainer[type],
      [task.id]: task
    }
  }

  return res.status(201).json({
    message: 'Resource created',
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

  const type = req.query.type;
  if (!Number.isNaN(id)) {
    const task = tasksContainer[type] && tasksContainer[type][id];
  
    if (task !== null) {
      delete tasksContainer[type][id];
      return res.status(200).json({
        message: 'Updated successfully',
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

module.exports = app;