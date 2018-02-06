const express = require('express');
const tasksContainer = require('../../tasks.json');
const router = express.Router();

/**
 * GET /task
 *
 * Return the list of tasks with status code 200.
 */
router.get('/', (req, res) => {

  function paginate(array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  const rows = { tasks: paginate(tasksContainer.tasks, 100, 1)};

  return res.status(200).json(rows);
});


/**
 * GET /page/:page
 *
 * Return the list of tasks with status code 200.
 */
router.get('/page/:num', (req, res) => {
  let currPage = parseInt(req.params.num, 10) || 1;
  let totalItems = tasksContainer.tasks.length;

  function paginate(array, page_size, page_number) {
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  const rows = { tasks: paginate(tasksContainer.tasks, 100, currPage), totalItems, currPage };

  return res.status(200).json(rows);
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
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.find((item) => item.id === id);

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
router.put('/update', (req, res) => {
  const id = parseInt(req.body.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== undefined) {
      task.title = req.body.title;
      task.description = req.body.description;
      task.color = req.body.color || 1;
      task.complete = req.body.complete || false;
      return res.status(200).json({
        message: 'Task updated'
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
 * POST /task/create/
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
router.post('/create', (req, res) => {
  const task = {
    id: (tasksContainer.tasks.length + 1),
    title: req.body.title,
    description: req.body.description,
  };

  tasksContainer.tasks.unshift(task);

  return res.status(201).json({
    message: 'Resource created',
  });
});

/**
 * DELETE /task/delete
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
router.delete('/delete', (req, res) => {
  const id = parseInt(req.body.id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);

    if (taskIndex !== -1) {
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Deleted successfully',
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

module.exports = router;