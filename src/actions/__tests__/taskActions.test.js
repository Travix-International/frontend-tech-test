import { taskActionTypes as at } from '../actionTypes';
import * as actionCreators from '../taskActions';

describe('task action creator tests', () => {
  it('should return the correct request actions', () => {
    expect(actionCreators.fetchAllTasksRequest).toEqual({
      type: at.FETCH_ALL_TASKS_REQUEST
    });
    expect(actionCreators.addTaskRequest).toEqual({
      type: at.ADD_TASK_REQUEST
    });
    expect(actionCreators.editTaskRequest).toEqual({
      type: at.EDIT_TASK_REQUEST
    });
    expect(actionCreators.toggleTaskRequest).toEqual({
      type: at.TOGGLE_TASK_REQUEST
    });
    expect(actionCreators.deleteTaskRequest).toEqual({
      type: at.DELETE_TASK_REQUEST
    });
  });

  it('should return the correct success actions', () => {
    const tasks = {
      'td_1': { id: 'td_1', title: 'todo1', completed: false },
      'td_1': { id: 'td_1', title: 'todo1', completed: true }
    };
    expect(actionCreators.fetchAllTasksSuccess(tasks)).toEqual({
      type: at.FETCH_ALL_TASKS_SUCCESS,
      payload: tasks
    });
    expect(actionCreators.addTaskSuccess(tasks['td_1'])).toEqual({
      type: at.ADD_TASK_SUCCESS,
      payload: tasks['td_1']
    });
    expect(actionCreators.editTaskSuccess(tasks['td_1'])).toEqual({
      type: at.EDIT_TASK_SUCCESS,
      payload: tasks['td_1']
    });
    expect(actionCreators.toggleTaskSuccess('td_1')).toEqual({
      type: at.TOGGLE_TASK_SUCCESS,
      payload: 'td_1'
    });
    expect(actionCreators.deleteTaskSuccess('td_1')).toEqual({
      type: at.DELETE_TASK_SUCCESS,
      payload: 'td_1'
    });
  });

  it('should return the correct fail actions', () => {
    const e = new Error('Something wrong');

    expect(actionCreators.fetchAllTasksFail(e)).toEqual({
      type: at.FETCH_ALL_TASKS_FAIL,
      error: e
    });
    expect(actionCreators.addTaskFail(e)).toEqual({
      type: at.ADD_TASK_FAIL,
      error: e
    });
    expect(actionCreators.editTaskFail(e)).toEqual({
      type: at.EDIT_TASK_FAIL,
      error: e
    });
    expect(actionCreators.toggleTaskFail(e)).toEqual({
      type: at.TOGGLE_TASK_FAIL,
      error: e
    });
    expect(actionCreators.deleteTaskFail(e)).toEqual({
      type: at.DELETE_TASK_FAIL,
      error: e
    });
  });
});