import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import apiService from '../../../../api/apiService';
import {
  ADD_TASKS_FAILED,
  ADD_TASKS_SUCESSS,
  ADD_TASKS_REQUEST,
} from '../AddTasksActionTypes';
import * as actions from '../AddTasksActions';

jest.mock('../../../../api/apiService');

describe('AddTasksActions', () => {
  describe('addTasksSuccess', () => {
    test('should return an add tasks success action', () => {
      expect(actions.addTasksSuccess()).toEqual({ type: ADD_TASKS_SUCESSS });
    });
  });
  describe('addTasksFailed', () => {
    test('should return an add tasks failed action', () => {
      expect(actions.addTasksFailed()).toEqual({ type: ADD_TASKS_FAILED });
    });
  });
  describe('addTasksRequest', () => {
    test('should return an add tasks request action', () => {
      expect(actions.addTasksRequest()).toEqual({ type: ADD_TASKS_REQUEST });
    });
  });
  describe('addTasks', () => {
    const mockStore = configureMockStore([thunk]);
    let store;

    beforeEach(() => {
      jest.resetAllMocks();
      store = mockStore({});
      apiService.post.mockReturnValue(Promise.resolve({}));
    });
    test('should call api and handle success', (cb) => {
      store.dispatch(actions.addTasks()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: ADD_TASKS_REQUEST });
        expect(store.getActions()[1]).toEqual({ type: ADD_TASKS_SUCESSS });
      }).then(cb);
    });
    test('should call api and handle failure', () => {
      apiService.post.mockReturnValue(Promise.reject());
      store.dispatch(actions.addTasks()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: ADD_TASKS_REQUEST });
        expect(store.getActions()[1]).toEqual({ type: ADD_TASKS_FAILED });
      });
    });
  });
});
