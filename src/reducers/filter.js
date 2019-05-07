import { TASK_FILTER } from '../constants';
import { filterActionTypes as ft } from '../actions/actionTypes';

const taskFilter = (state = TASK_FILTER.SHOW_ALL, action) => {
  const { type, payload } = action;
  if (type === ft.SET_TASK_VISIBILITY) {
    return payload;
  }

  return state;
};

export default taskFilter;