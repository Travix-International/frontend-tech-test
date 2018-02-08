import {
  changeLocale,
} from '../actions';
import { actionTypes as at } from '../constants';

describe('LanguageProvider actions', () => {
  describe('Change Local Action', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = {
        type: at.CHANGE_LOCALE,
        locale: 'de',
      };
      expect(changeLocale('de')).toEqual(expected);
    });
  });
});
