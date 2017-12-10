import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import apiService from '../../../../api/apiService';
import {
  LIST_TASKS_SUCESSS,
  LIST_TASKS_FAILED,
  LIST_TASKS_LOADING,
  LIST_TASKS_LOADED,
} from '../ListTasksActionTypes';
import * as actions from '../ListTasksActions';

jest.mock('../../../../api/apiService');

describe('ListTasksActions', () => {
  describe('listTasksSuccess', () => {
    test('should return a list tasks success action', () => {
      expect(actions.listTasksSuccess([{ foo: 'bar' }])).toEqual({
        type: LIST_TASKS_SUCESSS
      });
    });
  });
  describe('listTasksFailed', () => {
    test('should return a list tasks failed action', () => {
      expect(actions.listTasksFailed()).toEqual({
        type: LIST_TASKS_FAILED,
      });
    });
  });
  describe('listTasksLoading', () => {
    test('should return a list tasks loading action', () => {
      expect(actions.listTasksLoading()).toEqual({
        type: LIST_TASKS_LOADING,
      });
    });
  });
  describe('listTasksLoaded', () => {
    test('should return a list tasks loaded action', () => {
      expect(actions.listTasksLoaded()).toEqual({
        type: LIST_TASKS_LOADED,
      });
    });
  });
  describe('listTasks', () => {
    const mockStore = configureMockStore([thunk]);
    let store;

    beforeEach(() => {
      store = mockStore({});
      jest.resetAllMocks();

      apiService.get.mockReturnValue(Promise.resolve({}));
    });
    test('should call api and handle success', (cb) => {
      store.dispatch(actions.listTasks()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: LIST_TASKS_LOADING });
        expect(store.getActions()[1]).toEqual(
          expect.objectContaining({ type: LIST_TASKS_SUCESSS })
        );
        expect(store.getActions()[2]).toEqual({ type: LIST_TASKS_LOADED });
      }).then(cb);
    });
    test('should call api and handle failure', () => {
      apiService.get.mockReturnValue(Promise.reject());
      store.dispatch(actions.listTasks()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: LIST_TASKS_LOADING });
        expect(store.getActions()[1]).toEqual({ type: LIST_TASKS_FAILED });
        expect(store.getActions()[2]).toEqual({ type: LIST_TASKS_LOADED });
      });
    });
  });
});
