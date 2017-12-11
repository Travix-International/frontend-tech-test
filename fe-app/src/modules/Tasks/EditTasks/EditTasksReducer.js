import {
  EDIT_TASKS_FAILED,
  EDIT_TASKS_SUCESSS,
  EDIT_TASKS_REQUEST,
  VIEW_TASKS_SUCESSS,
  VIEW_TASKS_FAILED,
} from './EditTasksActionTypes';

const initialState = {
  errorMessage: '',
  isSubmitting: false,
  sucessMessage: '',
  task: {},
};

export default function EditTasksReducer(state = initialState, action) {
  switch (action.type) {
  case EDIT_TASKS_FAILED:
    return {
      ...state,
      errorMessage: 'Error editing new task',
      isSubmitting: false,
    };
  case EDIT_TASKS_SUCESSS:
    return {
      ...state,
      isSubmitting: false,
      sucessMessage: 'Task edited successfully',
    };
  case EDIT_TASKS_REQUEST:
    return {
      ...state,
      isSubmitting: true,
    };
  case VIEW_TASKS_SUCESSS:
    return {
      ...state,
      task: action.task,
    };
  case VIEW_TASKS_FAILED:
    return {
      ...state,
      task: {},
    };
  default:
    return state;
  }
}
