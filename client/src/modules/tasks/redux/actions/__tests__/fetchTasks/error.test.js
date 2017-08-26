import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { fetchTasks } from '../../';
import { FETCH_TASKS_ERROR } from '../../../actionTypes';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock(
  '../../../../../../services/Tasks',
  () => (
    class Tasks {
      fetchTasks() {
        return new Promise((resolve, reject) => { reject('error'); });
      }
    }
  ),
  { virtual: true },
);

describe('Tasks.Redux.Actions.FetchTasks', () => {
  it('should dispatch a FETCH_TASKS_ERROR action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(fetchTasks()).catch(() => {
      expect(store.getActions())
        .toContainEqual({ type: FETCH_TASKS_ERROR, error: true, payload: 'error' });
    });
  });
});
