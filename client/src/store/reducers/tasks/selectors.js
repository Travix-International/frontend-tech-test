import Immutable from "seamless-immutable";
import { createSelector } from "reselect";

const getTasks = state => {
  return state.tasks;
};

export const getTasksList = createSelector(
  [getTasks],
  tasks => {
    return Immutable(Object.values(tasks));
  }
);

export const getTaskItem = (state, taskID) => {
  return state.tasks[taskID];
};
