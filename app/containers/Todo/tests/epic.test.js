import { ActionsObservable } from 'redux-observable';

import request from 'utils/request';
import { onRequest, onUpdate, onRemove } from '../epic';
import { actionTypes as at } from '../constants';

jest.mock('utils/request', () => jest.fn());

describe('Todo Epic', () => {
  describe('onRequest', () => {
    it('should dispatch FETCH_SUCCESS', () => {
      const data = 'data';
      const action$ = ActionsObservable.of({ type: at.FETCH });

      request.mockReturnValue(Promise.resolve({ tasks: data }));

      return new Promise((resolve, reject) => {
        onRequest(action$)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.FETCH_SUCCESS, payload: { data } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });

    it('should dispatch FETCH_ERROR', () => {
      const error = 'error';
      const action$ = ActionsObservable.of({ type: at.FETCH });

      request.mockReturnValue(Promise.reject(error));

      return new Promise((resolve, reject) => {
        onRequest(action$)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.FETCH_ERROR, payload: { error } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });
  });

  describe('onUpdate', () => {
    it('should dispatch UPDATE_SUCCESS', () => {
      const data = 'data';
      const id = 'id';
      const title = 'title';
      const description = 'description';
      const index = 'index';
      const action$ = ActionsObservable.of({ type: at.UPDATE, payload: { id, title, description, index } });

      request.mockReturnValue(Promise.resolve({ task: data }));

      return new Promise((resolve, reject) => {
        onUpdate(action$)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.UPDATE_SUCCESS, payload: { data, index } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });

    it('should dispatch UPDATE_ERROR', () => {
      const error = 'error';
      const id = 'id';
      const title = 'title';
      const description = 'description';
      const index = 'index';
      const action$ = ActionsObservable.of({ type: at.UPDATE, payload: { id, title, description, index } });

      request.mockReturnValue(Promise.reject(error));

      return new Promise((resolve, reject) => {
        onUpdate(action$)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.UPDATE_ERROR, payload: { id, index } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });
  });

  describe('onRemove', () => {
    it('should dispatch REMOVE_SUCCESS', () => {
      const data = 'data';
      const id = 'id';
      const index = 'index';
      const action$ = ActionsObservable.of({ type: at.REMOVE, payload: { id, index } });

      request.mockReturnValue(Promise.resolve({ task: data }));

      return new Promise((resolve, reject) => {
        onRemove(action$)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.REMOVE_SUCCESS, payload: { data, index } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });

    it('should dispatch REMOVE_ERROR', () => {
      const error = 'error';
      const id = 'id';
      const index = 'index';
      const action$ = ActionsObservable.of({ type: at.REMOVE, payload: { id, index } });

      request.mockReturnValue(Promise.reject(error));

      return new Promise((resolve, reject) => {
        onRemove(action$)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.REMOVE_ERROR, payload: { id, index } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });
  });
});
