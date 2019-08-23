import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './components/modules/tasks/reducer';
import messageReducer from './components/modules/messages/reducer';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  task: taskReducer,
  message: messageReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
);

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();
