import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createAjaxMiddleware from '../middleware/ajaxClientMiddleware';
import ajaxClient from './../tools/ajaxClient';

const finalCreateStore = composeWithDevTools(
  applyMiddleware(createAjaxMiddleware(ajaxClient), createLogger(), thunk)
)(createStore);

export const configureStore = initialState => {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};