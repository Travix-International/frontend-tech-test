import {
  LIST_TASKS_FAILED,
  LIST_TASKS_SUCESSS,
  LIST_TASKS_LOADING,
  LIST_TASKS_LOADED,
} from '../ListTasksActionTypes';
import listTasksReducer from '../ListTasksReducer';

describe('ListTasksReducer', () => {
  test('should return initial state', () => {
    expect(listTasksReducer(undefined, {})).toEqual({
      tasks: [],
      isFetching: false,
    });
  });
  test('should return failed action object', () => {
    expect(listTasksReducer(undefined, { type: LIST_TASKS_FAILED })).toEqual({
      tasks: [],
      isFetching: false,
    });
  });
  test('should return success action object', () => {
    const action = { type: LIST_TASKS_SUCESSS, tasks: [{ foo: 'bar' }] };

    expect(listTasksReducer(undefined, action)).toEqual({
      tasks: [{ foo: 'bar' }],
      isFetching: false,
    });
  });
  test('should return loading action object', () => {
    expect(listTasksReducer(undefined, { type: LIST_TASKS_LOADING })).toEqual({
      tasks: [],
      isFetching: true,
    });
  });
  test('should return loaded action object', () => {
    expect(listTasksReducer(undefined, { type: LIST_TASKS_LOADED })).toEqual({
      tasks: [],
      isFetching: false,
    });
  });
});
