import { combineReducers, createStore, applyMiddleware } from 'redux'
import {Todo} from './../reducers/todo.reducer';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
const loggerOptions:ReduxLoggerOptions = {
    
}
const logger = createLogger({
  ...loggerOptions
});
const middleware = applyMiddleware(logger,ReduxThunk, (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f)
const reducers = combineReducers({Todo});
export const store = createStore(reducers,middleware);
