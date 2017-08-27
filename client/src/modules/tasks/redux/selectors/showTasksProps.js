import { createSelector } from 'reselect';
import { getTasks, getIsFetching, getError } from './allTasks';
import _ from 'lodash';

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
