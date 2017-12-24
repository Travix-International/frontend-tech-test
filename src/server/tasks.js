import express from 'express';
import { normalize } from 'normalizr';
import bodyParser from 'body-parser';
import schemas from '../schemas';
import tasksContainer from '../../tasks.json';

const router = express.Router();

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
export const getCb = (req, res) => {
  const response = normalize(tasksContainer.tasks, [schemas.task]);
  return res.status(200).json(response);
};
router.get('/tasks', getCb);

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
export const getWithIdCb = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item) => { return item.id === id; });

    if (task !== undefined) {
      const response = normalize(task, schemas.task);
      return res.status(200).json(response);
    }
    return res.status(404).json({
      message: 'Not found.',
    });
  }
  return res.status(400).json({
    message: 'Bad request.',
  });
};
router.get('/tasks/:id', getWithIdCb);

/**
 * PATCH /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 200 and updated task.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
export const patchCb = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== undefined) {
      const { title, description } = req.body;
      task.title = title;
      task.description = description;
      const response = normalize(task, schemas.task);
      return res.status(200).json(response);
    }
    return res.status(404).json({
      message: 'Not found',
    });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
};
router.patch('/tasks/:id', bodyParser.json(), patchCb);

/**
 * POST /task
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201, and created instance
 */
export const postCb = (req, res) => {
  const { title, description } = req.body;
  const task = {
    id: tasksContainer.tasks.length,
    title,
    description,
  };

  tasksContainer.tasks.push(task);

  const response = normalize(task, schemas.task);

  return res.status(201).json(response);
};
router.post('/tasks', bodyParser.json(), postCb);

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
export const deleteCb = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task !== undefined) {
      const taskIndex = tasksContainer.tasks.indexOf(task);
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(204).end();
    }
    return res.status(404).json({
      message: 'Not found',
    });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
};
router.delete('/tasks/:id', deleteCb);

export default router;
