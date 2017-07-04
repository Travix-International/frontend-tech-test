import { Schema } from 'mongoose';
import { db } from './index';

const TaskSchema = Schema({
  title: String,
  description: String,
  date: Date,
  completed: Boolean
});

const TaskModel = db.model('Task', TaskSchema);

export default TaskModel;
