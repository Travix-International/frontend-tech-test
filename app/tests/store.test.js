import { browserHistory } from 'react-router-dom';

import configureStore from '../configureStore';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('injectedReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof store.injectedReducers).toBe('object');
    });
  });

  describe('injectedEpics', () => {
    it('should contain an object for epics', () => {
      expect(typeof store.injectedEpics).toBe('object');
    });
  });

  describe('$epic', () => {
    it('should contain an object for subject epic$', () => {
      expect(typeof store.epic$).toBe('object');
    });
  });
});

describe('configureStore params', () => {
  it('should call window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', () => {
    /* eslint-disable no-underscore-dangle */
    const compose = jest.fn();
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = () => compose;
    configureStore(undefined, browserHistory);
    expect(compose).toHaveBeenCalled();
    /* eslint-enable */
  });
});
