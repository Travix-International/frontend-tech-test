import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import apiService from '../../../../api/apiService';
import * as actions from '../../DeleteTasks/DeleteTasksActions';
import * as listActions from '../../ListTasks/ListTasksActions';
import DELETE_TASK_FAILED from '../DeleteTasksActionTypes';

jest.mock('../../../../api/apiService');
jest.mock('../../ListTasks/ListTasksActions');

describe('DeleteTasksActions', () => {
  describe('deleteTaskFailed', () => {
    test('should return an delete task failed action', () => {
      expect(actions.deleteTaskFailed()).toEqual({ type: DELETE_TASK_FAILED });
    });
  });
  describe('deleteTask', () => {
    const mockStore = configureMockStore([thunk]);
    let store;

    beforeEach(() => {
      jest.resetAllMocks();
      store = mockStore({});
      apiService.destroy.mockReturnValue(Promise.resolve({}));
      listActions.listTasks.mockReturnValue({ type: 'FOO_TYPE' });
    });
    test('should call api and handle success', (cb) => {
      store.dispatch(actions.deleteTask('1')).then(() => {
        expect(apiService.destroy).toHaveBeenCalledWith('task/1');
        expect(listActions.listTasks).toHaveBeenCalled();
      }).then(cb);
    });
    test('should call api and handle failure', () => {
      apiService.destroy.mockReturnValue(Promise.reject());
      store.dispatch(actions.deleteTask('1')).then(() => {
        expect(apiService.destroy).toHaveBeenCalledWith('task/1');
        expect(store.getActions()[0]).toEqual({ type: DELETE_TASK_FAILED });
      });
    });
  });
});
