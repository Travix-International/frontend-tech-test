import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import TodoState from "./todo/state";
import todoReducer from "./todo/reducer";

export interface ApplicationState {
    todo: TodoState,
}

export const rootReducer = combineReducers<ApplicationState>({
    todo: todoReducer,
});

const composeSetup = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; /* redux devtools setup */

const store = createStore(
    rootReducer,
    composeSetup(applyMiddleware(thunk))
);

export default store;