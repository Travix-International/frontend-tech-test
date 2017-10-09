import { Router } from "express";
import validate from "express-validation";
import Joi from "joi";

import { toJSONModel, toDBModel } from "../../utils/model-normalizer";

import Todo from "../../schemas/Todo";

const router = Router();

/**
 * GET /task
 *
 * Return the list of tasks with status code 200.
 */
router.get("/", (req, res, next) => {
  Todo
    .getAll()
    .then(collection => res.status(200).send(collection.map(toJSONModel)))
    .catch(next)
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
router.get("/:id",
  validate({
    params: {
      id: Joi.string().required()
    }
  }),
  ({ params: { id } }, res, next) => {
    Todo
      .get(id)
      .then(collection => res.status(200).send(toJSONModel(collection[0])))
      .catch(next)
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
router.put("/",
  validate({
    body: {
      id: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
    }
  }),
  ({ body }, res, next) => {
    Todo
      .update(toDBModel(body))
      .then(result => res.status(204).end())
      .catch(next);
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
router.post("/",
  validate({
    body: {
      title: Joi.string().required(),
      description: Joi.string().required(),
    }
  }),
  ({ body }, res, next) => {
    Todo
      .create(toDBModel(body))
      .then(result => res.status(201).json(toJSONModel(result)))
      .catch(next);
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
router.delete("/:id", ({ params: { id } }, res, next) => {
  Todo
    .delete(id)
    .then(result => res.status(204).json(toJSONModel(result)))
    .catch(next);
});

export default router;
