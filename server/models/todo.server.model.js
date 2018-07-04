import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  title: String,
  done: Boolean
});

export default mongoose.model('Todo', Schema);
