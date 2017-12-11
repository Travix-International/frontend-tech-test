import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import Main from 'components/structure/Main';
import Home from 'components/views/Home';
import reducers from 'reducers';

import 'assets/styles/app.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root') || document.createElement('div')
);
