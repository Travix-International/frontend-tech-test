import { ObjectID } from 'mongodb';
import Task from '../server/app/models/Task';

import { tasks } from './tasks';

const dbTasks = tasks.map((task) => {
  task._id = new ObjectID();
  return task;
});

export const populateTasks = (done) => {
  /* eslint-disable promise/no-callback-in-promise, no-console */
  Task.remove({})
    .then(() => Task.insertMany(dbTasks))
    .then(() => done())
    .catch(error => console.error(error));
};
