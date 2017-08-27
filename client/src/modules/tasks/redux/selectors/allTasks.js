import { createSelector } from 'reselect';
import getState from './state';

export const getTasks = createSelector(
  getState,
  state => state.allTasks.tasks,
);

export const getIsFetching = createSelector(
  getState,
  state => state.allTasks.isFetching,
);

export const getError = createSelector(
  getState,
  state => state.allTasks.error,
);
