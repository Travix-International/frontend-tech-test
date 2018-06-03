import * as types from '../constants/appConstants';

export function addTask(task) {
  return { type: types.ADD_TASK, task }
}

export function removeTask(index) {
  return { type: types.REMOVE_TASK, index }
}
