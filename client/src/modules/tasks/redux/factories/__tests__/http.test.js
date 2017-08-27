import { http } from '../';

describe('Tasks.Redux.Factories.http', () => {
  it('should return a default state with isFetching and error', () => {
    const result = http();

    expect(result).toEqual({ isFetching: false, error: null });
  });

  it('should return a state when replacing isFetching and error', () => {
    const newState = { isFetching: true, error: 'error' };
    const result = http(newState);

    expect(result).toEqual(newState);
  });
});
