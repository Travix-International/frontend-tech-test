import { createSelector } from 'reselect';
import { getTasks, getIsFetching, getError } from './allTasks';

export default createSelector(
  [
    getTasks,
    getIsFetching,
    getError,
  ],
  (tasks, isFetching, error) => ({ tasks, isFetching, error }),
);
