import { fromJS } from 'immutable';

import { actionTypes as atForm } from './Form/constants';
import { actionTypes as at } from './constants';

export const INITIAL_STATE = fromJS({
  loading: false,
  data: []
});

export default (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case at.FETCH: {
      return state
        .set('loading', !INITIAL_STATE.get('loading'));
    }
    case at.FETCH_SUCCESS: {
      const { data } = payload;

      return state
        .set('loading', INITIAL_STATE.get('loading'))
        .set('data', fromJS(data));
    }
    case at.FETCH_ERROR: {
      return state
        .set('loading', INITIAL_STATE.get('loading'));
    }
    case at.REMOVE:
    case at.UPDATE: {
      const { index } = payload;

      return state
        .setIn(['data', index, 'loading'], true);
    }
    case at.UPDATE_SUCCESS: {
      const { index } = payload;

      return state
        .setIn(['data', index, 'loading'], false);
    }
    case at.REMOVE_ERROR:
    case at.UPDATE_ERROR: {
      const { index } = payload;

      return state
        .setIn(['data', index, 'loading'], false);
    }
    case at.REMOVE_SUCCESS: {
      const { index } = payload;

      return state
        .setIn(['data', index, 'removed'], true);
    }
    case atForm.SAVE_SUCCESS: {
      const { data } = payload;

      return state
        .set('data', state.get('data').unshift(fromJS(data)));
    }
    default:
      return state;
  }
};
