import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import apiService from '../../../../api/apiService';
import {
  EDIT_TASKS_FAILED,
  EDIT_TASKS_SUCESSS,
  EDIT_TASKS_REQUEST,
  VIEW_TASKS_SUCESSS,
  VIEW_TASKS_FAILED,
} from '../EditTasksActionTypes';
import * as actions from '../EditTasksActions';
import * as listActions from '../../ListTasks/ListTasksActions';

jest.mock('../../../../api/apiService');
jest.mock('../../ListTasks/ListTasksActions');

describe('EditTasksActions', () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  beforeEach(() => {
    jest.resetAllMocks();
    store = mockStore({});
  });
  describe('editTasksSuccess', () => {
    test('should return an edit tasks success action', () => {
      expect(actions.editTasksSuccess()).toEqual({ type: EDIT_TASKS_SUCESSS });
    });
  });
  describe('editTasksFailed', () => {
    test('should return an edit tasks failed action', () => {
      expect(actions.editTasksFailed()).toEqual({ type: EDIT_TASKS_FAILED });
    });
  });
  describe('editTasksRequest', () => {
    test('should return an edit tasks request action', () => {
      expect(actions.editTasksRequest()).toEqual({ type: EDIT_TASKS_REQUEST });
    });
  });
  describe('editTask', () => {
    test('should call api and handle success', (cb) => {
      apiService.put.mockReturnValue(Promise.resolve({}));
      store.dispatch(actions.editTask('1', { foo: 'bar' })).then(() => {
        expect(apiService.put).toHaveBeenCalledWith('task/1', { foo: 'bar' });
        expect(store.getActions()[0]).toEqual({ type: EDIT_TASKS_REQUEST });
        expect(store.getActions()[1]).toEqual({ type: EDIT_TASKS_SUCESSS });
        expect(listActions.listTasks).toHaveBeenCalled();
      }).then(cb);
    });
    test('should call api and handle failure', () => {
      apiService.put.mockReturnValue(Promise.reject());
      store.dispatch(actions.editTask('1', { foo: 'bar' })).then(() => {
        expect(apiService.put).toHaveBeenCalledWith('task/1', { foo: 'bar' });
        expect(store.getActions()[0]).toEqual({ type: EDIT_TASKS_REQUEST });
        expect(store.getActions()[1]).toEqual({ type: EDIT_TASKS_FAILED });
      });
    });
  });
  describe('viewTasksSuccess', () => {
    test('should return an view tasks sucess action', () => {
      expect(actions.viewTasksSuccess([{ foo: 'bar' }])).toEqual(
        { type: VIEW_TASKS_SUCESSS }
      );
    });
  });
  describe('viewTasksFailed', () => {
    test('should return an view tasks failed action', () => {
      expect(actions.viewTasksFailed()).toEqual({ type: VIEW_TASKS_FAILED });
    });
  });
  describe('viewTask', () => {
    test('should call api and handle success', (cb) => {
      apiService.get.mockReturnValue(Promise.resolve({}));
      store.dispatch(actions.viewTask('1')).then(() => {
        expect(apiService.get).toHaveBeenCalledWith('task/1');
        expect(store.getActions()[0]).toEqual(
          expect.objectContaining({ type: VIEW_TASKS_SUCESSS })
        );
      }).then(cb);
    });
    test('should call api and handle failure', () => {
      apiService.get.mockReturnValue(Promise.reject());
      store.dispatch(actions.viewTask('1')).then(() => {
        expect(apiService.get).toHaveBeenCalledWith('task/1');
        expect(store.getActions()[0]).toEqual({ type: VIEW_TASKS_FAILED });
      });
    });
  });
});
