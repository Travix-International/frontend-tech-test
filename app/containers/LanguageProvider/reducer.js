import { fromJS } from 'immutable';

import { DEFAULT_LOCALE } from 'containers/App/constants';
import { actionTypes as at } from './constants';

const INITIAL_STATE = fromJS({
  locale: DEFAULT_LOCALE
});

export default (state = INITIAL_STATE, { type, ...action }) => {
  switch (type) {
    case at.CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
};
