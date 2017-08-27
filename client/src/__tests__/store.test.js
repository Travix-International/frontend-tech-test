import createStore from '../store';


describe('Store', () => {
  it('should return an store', () => {
    const middlewares = [];
    const reducers = { test: () => ({}) };
    const store = createStore({ middlewares, reducers });

    expect(store).toHaveProperty('dispatch');
    expect(store).toHaveProperty('getState');
  });
});
