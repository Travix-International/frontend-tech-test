import {
  LIST_TASKS_FAILED,
  LIST_TASKS_SUCESSS,
  LIST_TASKS_LOADING,
  LIST_TASKS_LOADED,
} from './ListTasksActionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
};

export default function ListTasksReducer(state = initialState, action) {
  switch (action.type) {
  case LIST_TASKS_FAILED:
    return {
      ...state,
      tasks: [],
    };
  case LIST_TASKS_SUCESSS:
    return {
      ...state,
      tasks: action.tasks,
    };
  case LIST_TASKS_LOADING:
    return {
      ...state,
      isFetching: true,
    };
  case LIST_TASKS_LOADED:
    return {
      ...state,
      isFetching: false,
    };
  default:
    return state;
  }
}
