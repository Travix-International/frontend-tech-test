import pick from 'lodash.pick';
import emitter from 'central-event';

import Task from '../models/Task';

/**
 * Helper middleware for
 * PUT/PATCH/DELETE /api/tasks/:id
 *
 * id: ObjectId
 *
 * Gets the requested task by its ID from db and sets it on the request object.
 * Thus avoiding repeating the db request logic.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 */
export const helperMiddleware = async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    req.task = task;
    next();
  } else {
    res.status(404).send({ message: 'Not found' });
  }
};

/**
 * GET /api/tasks
 *
 * Return the list of tasks with status code 200.
 */
export const fetch = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

/**
 * POST /api/tasks
 *
 * title: string
 * description: string
 *
 * Add a new task to the DB with the given title and description.
 * Notify Websockets server to push new data to clients
 * Return status code 201.
 */
export const create = (req, res) => {
  const task = new Task(req.body);
  // TODO: Sanitize title, description
  if (!req.body.title) {
    res.status(400).send({ message: 'Task is required' });
  } else {
    task.save();
    emitter.emit('tasks/updated');
    res.status(201).send(task);
  }
};

/**
 * PATCH /api/tasks/:id
 *
 * id: ObjectId
 * title: string
 * description: string
 * isComplete: boolean
 *
 * Update the task with the given id.
 * Notify Websockets server to push new data to clients
 * If the task is found and updated as well, return a status code 200.
 */
export const update = async (req, res) => {
  if (req.body._id) {
    delete req.body._id;
  }

  Object.keys(req.body).forEach((prop) => {
    req.task[prop] = req.body[prop];
  });

  try {
    await req.task.save();
    emitter.emit('tasks/updated');
    res.status(200).json(req.task);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

/**
 * PUT /api/tasks/:id
 *
 * id: ObjectId
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * Notify Websockets server to push new data to clients
 * If the task is found and updated as well, return a status code 200.
 */
export const replace = async (req, res) => {
  Object.assign(
    req.task,
    pick(req.body, ['text', 'description', 'isComplete'])
  );

  try {
    await req.task.save();
    emitter.emit('tasks/updated');
    res.status(200).json(req.task);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

/**
 * DELETE /task/:id
 *
 * id: ObjectId
 *
 * Delete the task linked to the  given id.
 * Notify Websockets server to push new data to clients
 * If the task is found and deleted as well, return a status code 204.
 */
export const remove = async (req, res) => {
  try {
    await req.task.remove();
    emitter.emit('tasks/updated');
    res.status(204).send({ message: 'Removed' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
