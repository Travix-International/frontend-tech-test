'use strict';

const { tasks } = require('./tasks.json');

/**
 * Task Middleware
 *
 * Check for a valid integer ID and check for the existence of the task.
 * Also store the *valid* task into res.locals
 * 
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
module.exports = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  // Check for not valid ID
  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
  // Get a valid task
  const task = tasks.find(item => item.id === id);
  if (task) {
    res.locals.task = task;
    return next();
  }
  // Task was not found
  return res.status(404).json({
    message: 'Not found',
  });
};