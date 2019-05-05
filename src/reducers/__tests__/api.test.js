import apiReducer from '../api';
import { taskActionTypes as ta } from '../../actions/actionTypes';

describe('api reducers test', () => {
  it('should return the initial state if the action is not matched', () => {
    expect(apiReducer(undefined, {})).toEqual({});
  });

  it('should set pending to true for api request', () => {
    expect(apiReducer({}, {
      type: ta.FETCH_ALL_TASKS_REQUEST
    })).toEqual({
      fetchAllTasks: { pending: true, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.ADD_TASK_REQUEST
    })).toEqual({
      addTask: { pending: true, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.EDIT_TASK_REQUEST
    })).toEqual({
      editTask: { pending: true, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.DELETE_TASK_REQUEST
    })).toEqual({
      deleteTask: { pending: true, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.TOGGLE_TASK_REQUEST
    })).toEqual({
      toggleTask: { pending: true, failure: false }
    });
  });

  it('should set pending to false for successful and failure requests', () => {
    expect(apiReducer({}, {
      type: ta.FETCH_ALL_TASKS_SUCCESS
    })).toEqual({
      fetchAllTasks: { pending: false, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.ADD_TASK_SUCCESS
    })).toEqual({
      addTask: { pending: false, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.EDIT_TASK_SUCCESS
    })).toEqual({
      editTask: { pending: false, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.DELETE_TASK_SUCCESS
    })).toEqual({
      deleteTask: { pending: false, failure: false }
    });

    expect(apiReducer({}, {
      type: ta.TOGGLE_TASK_SUCCESS
    })).toEqual({
      toggleTask: { pending: false, failure: false }
    });
  });

});