import { combineReducers } from 'redux-immutable';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

const createReducer = injectedReducers => {
  return combineReducers({
    language: languageProviderReducer,
    ...injectedReducers
  });
};

export default createReducer;
