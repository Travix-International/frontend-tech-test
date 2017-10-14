import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../redux/configureStore';
import { ConnectedRouter } from 'react-router-redux';

class App extends Component {
  render() {
    const initialState = {}; // Set a initial state here
    const browserHistory = createHistory();
    const store = configureStore(initialState, browserHistory);
    return (
      <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
          <div className='main-wrapper'>
            <Routes />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
