import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ToDoScreen from "./components/ToDoScreen";
//import { createStore } from "redux";
import { Provider } from "react-redux";
import ToDoReducer from "./reducers/reducers";
import initialState from "./reducers/states";
// here is our redux-store
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(
  ToDoReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

//const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ToDoScreen />{" "}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
