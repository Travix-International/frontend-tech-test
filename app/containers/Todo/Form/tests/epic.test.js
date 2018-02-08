import { ActionsObservable } from 'redux-observable';
import { fromJS } from 'immutable';

import request from 'utils/request';
import { onSave } from '../epic';
import { actionTypes as at, key } from '../constants';

jest.mock('utils/request', () => jest.fn());

const store = {
  getState: jest.fn()
};
const state = fromJS({
  [key]: {
    title: 'title',
    description: 'description'
  }
});

store.getState.mockReturnValue(state);

describe('TodoForm Epic', () => {
  describe('onSave', () => {
    it('should dispatch SAVE_SUCCESS', () => {
      const data = 'data';
      const action$ = ActionsObservable.of({ type: at.SAVE });

      request.mockReturnValue(Promise.resolve({ task: data }));

      return new Promise((resolve, reject) => {
        onSave(action$, store)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.SAVE_SUCCESS, payload: { data } }
              ]);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
      });
    });

    it('should dispatch SAVE_ERROR', () => {
      const error = 'error';
      const action$ = ActionsObservable.of({ type: at.SAVE });

      request.mockReturnValue(Promise.reject(error));

      return new Promise((resolve, reject) => {
        onSave(action$, store)
          .toArray()
          .subscribe(actions => {
            try {
              expect(actions).toEqual([
                { type: at.SAVE_ERROR }
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
