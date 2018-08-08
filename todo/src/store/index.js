import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware
  )
);
sagaMiddleware.run(sagas);

export default store;

