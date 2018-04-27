import React from 'react';
import { render } from 'react-dom';
import ToDoApp from './pages/ToDoApp/index';
import { Provider } from 'react-redux';
import store from './redux/store';

render((
    <Provider store={store}>
        <ToDoApp/>
    </Provider>
), document.getElementById('root'));
