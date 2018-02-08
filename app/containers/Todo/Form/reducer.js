import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

export const INITIAL_STATE = fromJS({
  title: '',
  description: '',
  loading: false
});

export default (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case at.CHANGE: {
      const { name, value } = payload;

      return state
        .set(name, value);
    }
    case at.SAVE: {
      return state
        .set('loading', !INITIAL_STATE.get('loading'));
    }
    case at.SAVE_SUCCESS: {
      return INITIAL_STATE;
    }
    case at.SAVE_ERROR: {
      return state
        .set('loading', INITIAL_STATE.get('loading'));
    }
    default:
      return state;
  }
};
