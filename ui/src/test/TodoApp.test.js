import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoApp from '../components/TodoApp/TodoApp';

import todoReducer from '../reducers'
const store = createStore(todoReducer);

import {actionsList, initTodoApp} from '../actions/todos';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp/>
        </Provider>
        , div);
});

describe('TodoApp actions', () => {
    it('should dispatch an action to initiate loading', () => {
        const expectedAction = {
            type: actionsList.INIT_TODO_APP,
            data: []
        };
        expect(
            initTodoApp()
        ).toEqual(expectedAction);
    });
});
