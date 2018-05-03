import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true, minlength: 1, trim: true },
  description: { type: String, trim: true },
  isComplete: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
