// React
const React = require('react');
const { render } = require('react-dom');
const App = require('./components/App');
// Redux
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const reducers = require('./reducers');

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app-root'),
);