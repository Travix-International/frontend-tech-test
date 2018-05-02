import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import axios from 'axios';

import rootReducer from '../reducers/';
import App from '../components/App';

const serverRender = async req => {
  const requestURL = `${process.env.HOST}:${process.env.PORT}`;
  const response = await axios.get(`${requestURL}/api/data`);

  const initialState = { tasks: response.data };
  const context = {};
  const store = createStore(rootReducer, initialState);

  const initialMarkup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.baseUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  return {
    initialMarkup,
    preloadedState
  };
};

export default serverRender;
