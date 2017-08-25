import httpFactory from '../http';

describe('Tasks.Redux.Factories.http', () => {
  it('should return a default state with isFetching and error', () => {
    const result = httpFactory();

    expect(result).toEqual({ isFetching: false, error: null });
  });

  it('should return a state when replacing isFetching and error', () => {
    const newState = { isFetching: true, error: 'error' };
    const result = httpFactory(newState);

    expect(result).toEqual(newState);
  });
});
