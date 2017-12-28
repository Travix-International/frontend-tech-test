import path from 'path';
import express from 'express';
import { normalize } from 'normalizr';
import bodyParser from 'body-parser';
import persistent from 'travix-persistent-object';
import uuidv4 from 'uuid/v4';
import schemas from '../schemas';
import logger from '../logger';

const router = express.Router();
const POSSIBLE_KEYS = [
  'title',
  'description',
  'isDone',
];

const watcher = (error, object) => {
  error
    ? logger.error('PERSISTENT_ERROR', error, { isTrack: true })
    : logger.info('PERSISTENT_SAVED', object);
};

// travix persistent doesn't support relative path
const taskJSONPath = path.resolve(__dirname, '../../tasks.json');

// logger.debug('try log', 'message', {meta: 'meta'});
// logger.info('try info', 'message', {meta: 'meta'});
// logger.warn('try warn', 'message', {meta: 'meta'});
// logger.error('try error', 'message', {meta: 'meta'});
// process.on('uncaughtException', (err) => {
//   logger.exception('try exception', err, 'message', {meta: 'meta'});
// });
//
// try {
//   a
// } catch (err) {
//   logger.exception('try exception', err, 'message', {meta: 'meta'});
// }

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
export const getCb = (req, res) => {
  return persistent(taskJSONPath, { watcher })
    .then((tasksJSON) => {
      logger.info('LOAD:', tasksJSON);
      const response = normalize(tasksJSON.tasks, [schemas.task]);
      return res.status(200).json(response);
    });
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
  const id = req.params.id;

  if (id !== undefined) {
    return persistent(taskJSONPath, { watcher })
      .then((tasksJSON) => {
        const task = tasksJSON.tasks.find((item) => { return item.id === id; });
        logger.info('LOAD:', tasksJSON);
        logger.info('FIND_TASK:', task);

        if (task !== undefined) {
          const response = normalize(task, schemas.task);
          return res.status(200).json(response);
        }
        return res.status(404).json({
          message: 'Not found.',
        });
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
  const id = req.params.id;

  if (id !== undefined) {
    return persistent(taskJSONPath, { watcher })
      .then((tasksJSON) => {
        const task = tasksJSON.tasks.find(item => item.id === id);

        if (task !== undefined) {
          // only update when info is given from body
          // and in POSSIBLE_KEYS
          Object.keys(req.body).map((key) => {
            if (POSSIBLE_KEYS.indexOf(key) > -1) {
              task[key] = req.body[key];
            }
            return false;
          });
          return task;
        }
        return res.status(404).json({
          message: 'Not found',
        });
      })

      // simulate after persistent update
      // then send response
      .then((task) => {
        const response = normalize(task, schemas.task);
        return res.status(200).json(response);
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
  return persistent(taskJSONPath, { watcher })
    .then((tasksJSON) => {
      const task = {
        id: uuidv4(),
        isDone: false,
      };
      let hasFoundInvalidKey = false;
      // only create when valid info is given
      // and in POSSIBLE_KEYS
      Object.keys(req.body).some((key) => {
        if (POSSIBLE_KEYS.indexOf(key) > -1) {
          task[key] = req.body[key];
        } else {
          hasFoundInvalidKey = key;
          return hasFoundInvalidKey;
        }
        return false;
      });
      if (hasFoundInvalidKey) {
        return res.status(400).json({
          message: `task.${hasFoundInvalidKey} is not allowed`,
        });
      }

      tasksJSON.tasks.unshift(task);
      return task;
    })

    // simulate after persistent update
    // then send response
    .then((task) => {
      const response = normalize(task, schemas.task);

      return res.status(201).json(response);
    });
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
  const id = req.params.id;

  if (id !== undefined) {
    return persistent(taskJSONPath, { watcher })
      .then((tasksJSON) => {
        const task = tasksJSON.tasks.find(item => item.id === id);

        if (task !== undefined) {
          const taskIndex = tasksJSON.tasks.indexOf(task);
          tasksJSON.tasks.splice(taskIndex, 1);
          return false;
        }
        return res.status(404).json({
          message: 'Not found',
        });
      })
      .then(() => {
        return res.status(204).end();
      });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
};
router.delete('/tasks/:id', deleteCb);

export default router;
