import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import todoItems from "./reducers/index.js";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";
import thunk  from "redux-thunk";

export default function configureStore(initialState) {
    //For Debugging purpose only.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTNSION_COMPOSE__ || compose;
    
    return createStore(todoItems, initialState, composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvarient())));
}