import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import AppContainer from './components/AppContainer';

// Style
require('./style.less');
require('flexboxgrid');

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

render(
  <App />, document.getElementById('app')
);
