import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ToDoApp from './pages/ToDoApp/index';
import store from './redux/store';

render((
    <Provider store={store}>
        <ToDoApp />
    </Provider>
), document.getElementById('root'));
