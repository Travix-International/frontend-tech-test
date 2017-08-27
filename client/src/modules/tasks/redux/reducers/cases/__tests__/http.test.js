import * as http from '../http';

import { actionFactory } from '../../../../../../__tests__/testUtils/redux';
import { httpFactory } from '../../../../../../__tests__/testUtils/http';

const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.http.setSuccess', () => {
  const newState = http.setSuccess(defaultState, actionFactory());

  it('should set isFetching to false', () => {
    expect(newState.isFetching).toBe(false);
  });

  it('should set error to default', () => {
    expect(newState.error).toBe(null);
  });
});

describe('Tasks.Redux.Reducers.Cases.http.setLoading', () => {
  const newState = http.setLoading(defaultState, actionFactory());

  it('should set isFetching to true', () => {
    expect(newState.isFetching).toBe(true);
  });

  it('should set error to default', () => {
    expect(newState.error).toBe(null);
  });
});

describe('Tasks.Redux.Reducers.Cases.http.setError', () => {
  const error = 'error';
  const newState = http.setError(defaultState, actionFactory({ payload: { error } }));

  it('should set error to action.payload', () => {
    expect(newState.error).toEqual({ error });
  });

  it('should set isFetching to false', () => {
    expect(newState.isFetching).toBe(false);
  });
});
