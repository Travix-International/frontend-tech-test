import {
  LIST_TASKS_FAILED,
  LIST_TASKS_SUCESSS,
  LIST_TASKS_LOADING,
  LIST_TASKS_LOADED,
  SHOW_TASKS_SUCESSS,
} from '../ListTasksActionTypes';
import listTasksReducer from '../ListTasksReducer';

describe('ListTasksReducer', () => {
  test('should return initial state', () => {
    expect(listTasksReducer(undefined, {})).toEqual({
      currentPage: 0,
      total: 0,
      totalPages: 0,
      tasks: [],
      isFetching: false,
    });
  });
  test('should return failed action object', () => {
    expect(listTasksReducer(undefined, { type: LIST_TASKS_FAILED })).toEqual({
      currentPage: 0,
      total: 0,
      totalPages: 0,
      tasks: [],
      isFetching: false,
    });
  });
  test('should return success action object', () => {
    const data = {
      tasks: [{ foo: 'bar' }],
      currentPage: 1,
      total: 10,
      totalPages: 100,
    };

    expect(listTasksReducer(undefined, { type: LIST_TASKS_SUCESSS, data }))
      .toEqual({
        tasks: [{ foo: 'bar' }],
        currentPage: 1,
        total: 10,
        totalPages: 100,
        isFetching: false,
      });
  });
  test('should return loading action object', () => {
    expect(listTasksReducer(undefined, { type: LIST_TASKS_LOADING })).toEqual({
      currentPage: 0,
      total: 0,
      totalPages: 0,
      tasks: [],
      isFetching: true,
    });
  });
  test('should return loaded action object', () => {
    expect(listTasksReducer(undefined, { type: LIST_TASKS_LOADED })).toEqual({
      currentPage: 0,
      total: 0,
      totalPages: 0,
      tasks: [],
      isFetching: false,
    });
  });
  test('should return loaded action object', () => {
    const action = { type: SHOW_TASKS_SUCESSS, tasks: [{ foo: 'bar' }] };

    expect(listTasksReducer(undefined, action)).toEqual({
      currentPage: 0,
      total: 0,
      totalPages: 0,
      tasks: [{ foo: 'bar' }],
      isFetching: false,
    });
  });
});
