import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default () => {
  const db = mongoose.connect(process.env.MONGODB_URI);
  return db;
};
