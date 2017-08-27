import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { fetchTasks } from '../../';
import { FETCH_TASKS_LOADING } from '../../../actionTypes';
import { actionFactory } from '../../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock(
  '../../../../../../services/Tasks',
  () => (
    class Tasks {
      fetchTasks() {
        return new Promise(() => {});
      }
    }
  ),
  { virtual: true },
);

describe('Tasks.Redux.Actions.FetchTasks', () => {
  it('should dispatch a FETCH_TASKS_LOADING action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(fetchTasks());


    expect(store.getActions()).toEqual([actionFactory({ type: FETCH_TASKS_LOADING })]);
  });
});
