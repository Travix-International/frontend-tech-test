import { memoryHistory } from 'react-router-dom';
import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import configureStore from '../../configureStore';
import getInjectors, {
  injectEpicFactory
} from '../epicInjectors';

const testEpic = combineEpics({
  onTest: action$ => {
    return action$
      .ofType('TEST')
      .mergeMap(() => Observable.of({
        type: 'TEST2'
      }));
  }
});

describe('injectors', () => {
  let store;
  let injectEpic;

  describe('getInjectors', () => {
    beforeEach(() => {
      store = configureStore({}, memoryHistory);
    });

    it('should return injectors', () => {
      expect(getInjectors(store).injectEpic).toBeDefined();
    });

    it('should throw if passed invalid store shape', () => {
      Reflect.deleteProperty(store, 'dispatch');

      expect(() => getInjectors(store)).toThrow();
    });
  });

  describe('injectEpic helper', () => {
    beforeEach(() => {
      store = configureStore({}, memoryHistory);
      store.injectedEpics = {};
      store.epic$ = {
        next: jest.fn()
      };
      injectEpic = injectEpicFactory(store, true);
    });

    it('should check a store if the second argument is falsy', () => {
      const inject = injectEpicFactory({});

      expect(() => inject('test', testEpic)).toThrow();
    });

    it('it should not check a store if the second argument is true', () => {
      Reflect.deleteProperty(store, 'dispatch');

      expect(() => injectEpic('test', { epic: testEpic })).not.toThrow();
    });

    it('should validate epic\'s key', () => {
      expect(() => injectEpic('', { epic: testEpic })).toThrow();
      expect(() => injectEpic(1, { epic: testEpic })).toThrow();
    });

    it('should validate epic\'s descriptor', () => {
      expect(() => injectEpic('test')).toThrow();
      expect(() => injectEpic('test', { epic: 1 })).toThrow();
    });

    it('should pass args to epic$.next', () => {
      injectEpic('test', { epic: testEpic });

      expect(store.epic$.next).toHaveBeenCalledWith(testEpic);
    });

    it('should save an entire descriptor in the epic registry', () => {
      injectEpic('test', { epic: testEpic, foo: 'bar' });
      expect(store.injectedEpics.test.foo).toBe('bar');
      injectEpic('test', { epic: testEpic, foo: 'bar1' });
      expect(store.injectedEpics.test.foo).toBe('bar');
    });
  });
});
