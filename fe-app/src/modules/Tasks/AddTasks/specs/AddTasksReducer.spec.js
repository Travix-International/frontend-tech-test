import {
  ADD_TASKS_FAILED,
  ADD_TASKS_SUCESSS,
  ADD_TASKS_REQUEST,
} from '../AddTasksActionTypes';
import addTasksReducer from '../AddTasksReducer';

describe('AddTasksReducer', () => {
  test('should return initial state', () => {
    expect(addTasksReducer(undefined, {})).toEqual({
      errorMessage: '',
      isSubmitting: false,
      sucessMessage: '',
    });
  });
  test('should return failed action object', () => {
    expect(addTasksReducer(undefined, { type: ADD_TASKS_FAILED })).toEqual({
      errorMessage: 'Error adding new task',
      isSubmitting: false,
      sucessMessage: '',
    });
  });
  test('should return success action object', () => {
    expect(addTasksReducer(undefined, { type: ADD_TASKS_SUCESSS })).toEqual({
      errorMessage: '',
      isSubmitting: false,
      sucessMessage: 'Task added successfully',
    });
  });
  test('should return request action object', () => {
    expect(addTasksReducer(undefined, { type: ADD_TASKS_REQUEST })).toEqual({
      errorMessage: '',
      isSubmitting: true,
      sucessMessage: '',
    });
  });
});
