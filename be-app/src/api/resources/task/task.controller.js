import { generateControllers } from '../../modules/controller';
import taskRepository from './task.repository';

export default generateControllers(taskRepository);
