import { fromJS } from 'immutable';

import reducer from '../reducer';
import { actionTypes as at } from '../constants';

describe('LanguageProvider Reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fromJS({
      locale: 'en',
    }));
  });

  it('changes the locale', () => {
    expect(reducer(undefined, { type: at.CHANGE_LOCALE, locale: 'de' }).toJS()).toEqual({
      locale: 'de'
    });
  });
});
