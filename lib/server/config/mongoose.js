import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

module.exports = function() {
  const db = mongoose.connect(process.env.DATABASE_URI);
  return db;
};
