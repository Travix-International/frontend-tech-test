import reducer from '../allTasks';
import { actionFactory } from '../../__tests__/factories';

import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
} from '../../actionTypes';

// Mock http cases
jest.mock('../cases/http', () => ({
  setLoading: jest.fn(() => ({
    isFetching: 'mocked',
  })),
  setError: jest.fn(() => ({
    error: 'mocked',
  })),
}));

// Mock fetchTasksSuccess
jest.mock('../cases/allTasks/fetchTasksSuccess', () => (
  jest.fn(() => ({
    tasks: 'mocked',
  }))
));

describe('Tasks.Redux.Reducers.AllTasks', () => {
  it('should call setLoading case when dispatching an FETCH_TASKS_LOADING action', () => {
    const newState = reducer(undefined, actionFactory({ type: FETCH_TASKS_LOADING }));

    expect(newState).toEqual({ isFetching: 'mocked' });
  });

  it('should call setError case when dispatching an FETCH_TASKS_ERROR action', () => {
    const newState = reducer(undefined, actionFactory({ type: FETCH_TASKS_ERROR }));

    expect(newState).toEqual({ error: 'mocked' });
  });

  it('should call fetchTasksSuccess case when dispatching an FETCH_TASKS_SUCCESS action', () => {
    const newState = reducer(undefined, actionFactory({ type: FETCH_TASKS_SUCCESS }));

    expect(newState).toEqual({ tasks: 'mocked' });
  });
});
