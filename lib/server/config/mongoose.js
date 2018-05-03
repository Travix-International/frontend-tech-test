import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default () => {
  const db = mongoose.connect(process.env.DATABASE_URI);
  return db;
};
