import { createSelector } from "reselect";
import { TASK_FILTER } from "../constants";
import { pickBy } from 'lodash';

export const getFilter = state => state.filter;

export const getAllTasks = state => state.tasks;

export const getVisibleTasks = createSelector(
  getFilter,
  getAllTasks,
  (filter, tasks) => {
    if (filter === TASK_FILTER.SHOW_ALL) return tasks;
    if (filter === TASK_FILTER.SHOW_ACTIVE) {
      return pickBy(tasks, task => !task.completed);
    }
    if (filter === TASK_FILTER.SHOW_COMPLETED) {
      return pickBy(tasks, task => task.completed);
    }
  }
);

export const getVisibleTasksArray = createSelector(
  getVisibleTasks,
  tasks => {
    if (tasks) {
      return Object.keys(tasks).map(key => tasks[key]);
    }

    return [];
  }
);

export const getTask = id => createSelector(
  getAllTasks,
  tasks => tasks[id]
);