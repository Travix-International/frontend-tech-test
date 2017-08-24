import * as React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import PromiseMiddleware from 'redux-promise-middleware';
import reducers from './modules/reducers';
import createStore from './store';

const store = createStore({ reducers, middlewares: [new PromiseMiddleware(), logger] });

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <span>dasasdas</span>
        </Provider>
      </div>
    );
  }
}
