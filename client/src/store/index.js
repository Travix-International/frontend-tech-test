import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./reducer";
import { rootEpic } from "./epic";

const composer =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const getStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    composer(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);
  return store;
};
