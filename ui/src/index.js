import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import io from "socket.io-client";

import TodoApp from "./components/TodoApp/TodoApp";
import registerServiceWorker from './registerServiceWorker';

import "./style/main.css";

import todoReducer from './reducers'
const store = createStore(todoReducer);

const socket = io("http://localhost:9001");


ReactDOM.render(
    <Provider store={store}>
        <TodoApp socket={socket}/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
