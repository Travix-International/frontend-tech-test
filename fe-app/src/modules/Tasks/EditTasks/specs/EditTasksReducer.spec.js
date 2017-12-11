import {
  EDIT_TASKS_FAILED,
  EDIT_TASKS_SUCESSS,
  EDIT_TASKS_REQUEST,
  VIEW_TASKS_SUCESSS,
  VIEW_TASKS_FAILED,
} from '../EditTasksActionTypes';
import editTasksReducer from '../EditTasksReducer';

describe('EditTasksReducer', () => {
  test('should return initial state', () => {
    expect(editTasksReducer(undefined, {})).toEqual({
      errorMessage: '',
      isSubmitting: false,
      sucessMessage: '',
      task: {},
    });
  });
  test('should return failed action object', () => {
    expect(editTasksReducer(undefined, { type: EDIT_TASKS_FAILED })).toEqual({
      errorMessage: 'Error editing new task',
      isSubmitting: false,
      sucessMessage: '',
      task: {},
    });
  });
  test('should return success action object', () => {
    expect(editTasksReducer(undefined, { type: EDIT_TASKS_SUCESSS })).toEqual({
      errorMessage: '',
      isSubmitting: false,
      sucessMessage: 'Task edited successfully',
      task: {},
    });
  });
  test('should return request action object', () => {
    expect(editTasksReducer(undefined, { type: EDIT_TASKS_REQUEST })).toEqual({
      errorMessage: '',
      isSubmitting: true,
      sucessMessage: '',
      task: {},
    });
  });
  test('should return view success action object', () => {
    const action = { type: VIEW_TASKS_SUCESSS, task: { bar: 'foo' } };

    expect(editTasksReducer(undefined, action)).toEqual({
      errorMessage: '',
      isSubmitting: false,
      sucessMessage: '',
      task: { bar: 'foo' },
    });
  });
  test('should return view failed action object', () => {
    expect(editTasksReducer(undefined, { type: VIEW_TASKS_FAILED })).toEqual({
      errorMessage: '',
      isSubmitting: false,
      sucessMessage: '',
      task: {},
    });
  });
});
