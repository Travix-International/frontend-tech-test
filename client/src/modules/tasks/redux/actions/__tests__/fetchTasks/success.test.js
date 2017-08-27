import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { fetchTasks } from '../../';
import { FETCH_TASKS_SUCCESS } from '../../../actionTypes';
import { actionFactory } from '../../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock(
  '../../../../../../services/Tasks',
  () => (
    class Tasks {
      fetchTasks() {
        return new Promise((resolve) => { resolve('success'); });
      }
    }
  ),
);

describe('Tasks.Redux.Actions.FetchTasks', () => {
  it('should dispatch a FETCH_TASKS_SUCCESS action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(fetchTasks()).then(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: FETCH_TASKS_SUCCESS, payload: 'success' }));
    });
  });
});
