import {
  ADD_TASKS_FAILED,
  ADD_TASKS_SUCESSS,
  ADD_TASKS_REQUEST,
} from './AddTasksActionTypes';

const initialState = {
  errorMessage: '',
  isSubmitting: false,
  sucessMessage: '',
};

export default function AddTasksReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_TASKS_FAILED:
    return {
      ...state,
      errorMessage: 'Error adding new task',
      isSubmitting: false,
    };
  case ADD_TASKS_SUCESSS:
    return {
      ...state,
      isSubmitting: false,
      sucessMessage: 'Task added successfully',
    };
  case ADD_TASKS_REQUEST:
    return {
      ...state,
      isSubmitting: true,
    };
  default:
    return state;
  }
}
