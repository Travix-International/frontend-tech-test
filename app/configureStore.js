import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { BehaviorSubject } from 'rxjs';
import { createEpicMiddleware } from 'redux-observable';

import createReducer from './reducers';
import epics from './epics';

const epic$ = new BehaviorSubject(epics);
const rootEpic = (action$, store) => epic$.mergeMap(epic => epic(action$, store));
const epicsMiddleware = createEpicMiddleware(rootEpic);

const configureStore = (initialState = {}, history) => {
  const middlewares = [
    epicsMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  store.epic$ = epic$;
  store.injectedReducers = {};
  store.injectedEpics = {};

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });

    module.hot.accept('./epics', () => {
      epicsMiddleware.replaceEpic(rootEpic);
    });
  }

  return store;
};

export default configureStore;
