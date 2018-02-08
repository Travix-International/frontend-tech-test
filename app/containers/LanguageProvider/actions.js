import { actionTypes as at } from './constants';

export const changeLocale = languageLocale => ({
  type: at.CHANGE_LOCALE,
  locale: languageLocale
});
