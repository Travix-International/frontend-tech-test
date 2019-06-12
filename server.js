
const port = 3000;
const app = require('express')();
const tasksContainer = require('./tasks.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');

app.use(cors());
app.use(bodyParser.json());

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/api/tasks', (req, res) => {
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
app.get('/api/tasks/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const task = tasksContainer.tasks.find((item) => item.id === id);

    if (task) {
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
app.put('/api/tasks/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      const { title, description, completed } = req.body;
      task.title = title;
      task.description = description;
      task.completed = completed;
      return res.status(201).json({
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
app.post('/api/tasks', (req, res) => {
  const { title, description, completed } = req.body;
  const task = {
    id: uniqid(),
    title,
    description,
    completed,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    message: 'Resource created',
    task,
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
app.delete('/api/tasks/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const task = tasksContainer.tasks.find(item => item.id === id);
  
    if (task !== null) {
      const taskIndex = tasksContainer.tasks.indexOf(task);
      tasksContainer.tasks.splice(taskIndex, 1)

      return res.status(201).json({
        message: 'Deleted',
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
  process.stdout.write(`the server is available on http://localhost:${port}\n`);
});

module.exports = app;
