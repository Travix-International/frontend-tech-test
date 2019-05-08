
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helper = require('./utils/helper');

const tasksContainer = require('./tasks.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => res.status(200).json(tasksContainer));

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
  const id = req.params.id;

  if (typeof id !== 'undefined') {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task
      });
    } else {
      return res.status(404).json({
        message: 'Not found.'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.'
    });
  }
});

/**
 * PUT /task/toggle/:id
 * id: string,
 * completed bool
 * 
 * Make task completed or active
 */
app.put('/task/toggle/:id', (req, res) => {
  const id = req.params.id;
  if (typeof id !== 'undefined') {
    const task = tasksContainer.tasks.find(item => item.id === id);
    if (typeof task !== 'undefined') {
      task.completed = !task.completed
      return res.status(204).json({ task });
    } else {
      return res.status(404).json({
        message: 'Not found'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
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
  const id = req.params.id;
  if (typeof id !== 'undefined') {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (typeof task !== 'undefined') {
      task.title = req.body.title;
      task.description = req.body.description;
      return res.status(204).json({ task });
    } else {
      return res.status(404).json({
        message: 'Not found'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
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
app.post('/task/create/', (req, res) => {
  const task = {
    id: helper.uniqueId('t'),
    title: req.body.title,
    description: req.body.description,
    completed: false
  };

  tasksContainer.tasks.unshift(task);

  return res.status(201).json({ task });
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
  const id = req.params.id;

  if (typeof id !== 'undefined') {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      const taskIndex = tasksContainer.tasks;
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Updated successfully'
      });
    } else {
      return res.status(404).json({
        message: 'Not found'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
    });
  }
});

app.get('/task/search/:query', (req, res) => {
  const query = req.params.query.replace(/\s+/, '.*');
  if (!query) return res.status(200).json({ results: [] });

  const re = new RegExp(`${query}`);
  const results = tasksContainer.tasks
    .filter(task => re.test(task.title))
    .map(task => task.id);
    
  return res.status(200).json({ results });
});

app.listen(3001, () => {
  process.stdout.write('the server is available on http://localhost:3001/\n');
});
