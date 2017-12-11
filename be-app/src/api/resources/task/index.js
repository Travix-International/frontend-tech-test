import { Router } from 'express';
import taskController from './task.controller';

const taskRouter = Router();

taskRouter.param('id', taskController.findByParam);

taskRouter.route('/')
  .get(taskController.getAll)
  .post(taskController.create);

taskRouter.route('/:id')
  .get(taskController.getOne)
  .put(taskController.update)
  .delete(taskController.destroy);

export default taskRouter;
