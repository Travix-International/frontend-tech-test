import * as cases from '../';

import { httpFactory, actionFactory } from '../../../__tests__/factories';

const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.http.setSuccess', () => {
  const newState = cases.http.setSuccess(defaultState, actionFactory());

  it('should set isFetching to false', () => {
    expect(newState.isFetching).toBe(false);
  });

  it('should set error to default', () => {
    expect(newState.error).toBe(null);
  });
});

describe('Tasks.Redux.Reducers.Cases.http.setLoading', () => {
  const newState = cases.http.setLoading(defaultState, actionFactory());

  it('should set isFetching to true', () => {
    expect(newState.isFetching).toBe(true);
  });

  it('should set error to default', () => {
    expect(newState.error).toBe(null);
  });
});

describe('Tasks.Redux.Reducers.Cases.http.setError', () => {
  const error = 'error';
  const newState = cases.http.setError(defaultState, actionFactory({ payload: { error } }));

  it('should set error to action.payload', () => {
    expect(newState.error).toEqual({ error });
  });

  it('should set isFetching to false', () => {
    expect(newState.isFetching).toBe(false);
  });
});
