const express = require ('express');
const taskRouter = express.Router ();
const labels = require ('../constants/labels');
const TASKS = require ('../local-db/tasks');
/**
 * GET /task/test-api
 * 
 * To test the connectivity. Appears first in the test case.
 */
taskRouter.get ('/task/test-api', (req, res) => {
  res.send ({
    'message': 'Task api connection successfull!'
  }).status (200);
});


taskRouter.get ('/task/get-app-data', (req, res) => {
  const data = TASKS.getAppData (parseInt (req.query.limit));
  if (data) {
    res.send ({
      'data': data
    }).status (200);
  } else {
    res.status (400).send ({
      'message': labels.CATCH_ERROR
    });
  }
})

/**
 * GET /task/get-all-tasks
 * 
 * Returns all tasks available in the current environment.
 */
taskRouter.get ('/task/get-all-tasks', (req, res) => {
  const { page, limit, type } = req.query;

  if (!page || !limit) {
    // bad request
    res.status (404).send ({
      'message': labels.BAD_REQUEST
    });
  } else {
    const allTasks = TASKS.getAllTasks (parseInt(page), parseInt(limit), type);
    res.send ({
      'data': allTasks
    });
  }
})

/**
 * POST /task/create-task
 */
taskRouter.post ('/task/create-task', (req, res) => {
  const createdTask = TASKS.createTask (req.body);
  res.send ({
    'data': createdTask
  }).status (200);
});

/**
 * GET /task/generate
 * 
 * Test api to generate 1000 tasks.
 */
taskRouter.get ('/task/generate', (req, res) => {
  const count = TASKS.generateTasks (req.query.count);
  res.send ({
    'message': `${count} tasks created.`
  });
});


/**
 * GET /task/:id
 * 
 * Get task by id.
 */
taskRouter.get ('/task/:id', (req, res) => {
  const task = TASKS.findById (req.params.id);
  if (task) {
    res.send ({
      'data': task
    }).status (200);
  } else {
    res.status (404).send ({
      'message': labels.NO_EXIST
    });
  }
});

/**
 * DELETE /task/:id
 * 
 * Delete task by id.
 */
taskRouter.delete ('/task/:id', (req, res) => {
  const task = TASKS.deleteById (req.params.id);
  if (task) {
    res.send ({
      'message': labels.TASK_DELETED
    }).status (200);
  } else {
    res.status (404).send ({
      'message': labels.NO_EXIST
    });
  }
});


/**
 * PUT /task/:id
 * 
 * Get task by id.
 */
taskRouter.put ('/task/:id', (req, res) => {
  if (!req.params.id) {
    res.status (404).send ({
      'message': labels.NO_ID
    });
  } else {
    const task = TASKS.updateTask (req.params.id, req.body);
    if (task.status !== -1) {
      if (task) {
        res.send ({
          'data': task
        }).status (200);
      }
    } else {
      res.status (500).send ({
        'message': task.message 
      });
    }
  }
});

module.exports = taskRouter;
