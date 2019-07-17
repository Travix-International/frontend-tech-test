import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
  task: null,
  isLoading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.tasks,
      };
    case actionTypes.FETCH_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.FETCH_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        task: action.task,
      };
    case actionTypes.FETCH_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        isLoading: false,
      };
    case actionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.EDIT_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.EDIT_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.task.id ? { ...action.task } : task)),
        isLoading: false,
      };
    case actionTypes.EDIT_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.DELETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter(task => task.id !== action.id),
      };
    case actionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default taskReducer;
