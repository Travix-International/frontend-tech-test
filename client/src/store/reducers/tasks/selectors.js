import Immutable from "seamless-immutable";
import { createSelector } from "reselect";

export const getTasks = state => {
  return state.tasks;
};

export const getFilter = state => {
  return state.filter;
};

export const getTasksList = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const list = Object.values(tasks).filter(task => {
      return task.done === (filter === "done");
    });
    return Immutable(list);
  }
);

export const getTaskItem = (state, taskID) => {
  return state.tasks[taskID];
};
