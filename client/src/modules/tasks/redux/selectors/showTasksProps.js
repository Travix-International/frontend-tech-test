import _ from 'lodash';
import { createSelector } from 'reselect';
import { getTasks, getIsFetching, getError } from './allTasks';

export default createSelector(
  [
    getTasks,
    getIsFetching,
    getError,
  ],
  (tasks, isFetching, error) => ({
    tasks: _.values(tasks), // transform it to an array
    isFetching,
    error,
  }),
);
