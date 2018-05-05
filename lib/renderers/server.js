import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers/';
import App from '../components/App';
import { fetchTasks } from '../server/utils/tasks';

const FIRST_LOAD_TASKS_LIMIT = 20;

/**
 * getInitialState
 *
 *
 * Fetch tasks from DB
 * return the initial state of the store
 */
const getInitialState = async () => {
  const tasks = await fetchTasks(FIRST_LOAD_TASKS_LIMIT);
  return { tasks, showCompleted: true };
};

/**
 * serverRender
 *
 *
 * Build HTML for Server Side Rendering with initialized store
 * Return the HTML + initial state of application
 */
const serverRender = async () => {
  const initialState = await getInitialState();
  const context = {};
  const store = createStore(rootReducer, initialState);

  const initialMarkup = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {
    initialMarkup,
    preloadedState: store.getState()
  };
};

export default serverRender;
