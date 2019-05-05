import { filterActionTypes as at } from './actionTypes';

export const setTaskVisibility = filterType => ({
  type: at.SET_TASK_VISIBILITY,
  payload: filterType
});