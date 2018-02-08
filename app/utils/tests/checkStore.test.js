import checkStore from '../checkStore';

const store = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: jest.fn(),
  replaceReducer: jest.fn(),
  epic$: jest.fn(),
  injectedReducers: {},
  injectedEpics: {},
};

describe('checkStore', () => {
  it('should not throw if passed valid store shape', () => {
    expect(() => checkStore(store)).not.toThrow();
  });

  it('should throw if passed invalid store shape', () => {
    expect(() => checkStore({})).toThrow();
    expect(() => checkStore({ ...store, injectedEpics: null })).toThrow();
    expect(() => checkStore({ ...store, injectedReducers: null })).toThrow();
    expect(() => checkStore({ ...store, epic$: null })).toThrow();
    expect(() => checkStore({ ...store, replaceReducer: null })).toThrow();
  });
});
