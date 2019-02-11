import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import Todo from './../reducers/todo.reducer';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { IStore } from '../interfaces/interface';
const loggerOptions:ReduxLoggerOptions = {
    
}
const logger = createLogger({
  ...loggerOptions
});
const middlewares = [logger,ReduxThunk];
const enhancers = [applyMiddleware(...middlewares)];
const reducers = combineReducers({Todo});
export const store = createStore(reducers, {}, ...enhancers);

