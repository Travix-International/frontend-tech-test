import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
export default store;