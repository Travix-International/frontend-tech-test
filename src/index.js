import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore , applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers';
import toastMessage from './reducers/toast';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ todos, toastMessage }),
    compose(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
