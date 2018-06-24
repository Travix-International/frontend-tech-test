// React
const React = require('react');
const { render } = require('react-dom');
const App = require('./components/App');
// Redux
const { Provider } = require('react-redux');
const store = require('./store');

require('./index.css');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root'),
);
