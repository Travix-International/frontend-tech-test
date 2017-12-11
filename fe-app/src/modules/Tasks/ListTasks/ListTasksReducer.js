import {
  LIST_TASKS_FAILED,
  LIST_TASKS_SUCESSS,
  LIST_TASKS_LOADING,
  LIST_TASKS_LOADED,
  SHOW_TASKS_SUCESSS,
} from './ListTasksActionTypes';

const initialState = {
  currentPage: 0,
  total: 0,
  totalPages: 0,
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
      currentPage: action.data.currentPage,
      total: action.data.total,
      totalPages: action.data.totalPages,
      tasks: action.data.tasks,
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
  case SHOW_TASKS_SUCESSS:
    return {
      ...state,
      tasks: action.tasks,
    };
  default:
    return state;
  }
}
