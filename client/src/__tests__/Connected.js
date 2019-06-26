import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import TodoList from '../components/TodoList';
import { shallow, mount } from 'enzyme';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockStoreInitialized = mockStore({
    getTodoList: {
        tasks: [{
            id: 0,
            title: 'test title',
            description: 'test desc'
        },
        {
            id: 1,
            title: 'test title',
            description: 'test desc'
        }],
        task: {}
    }
});

describe.only('<TodoList Component />', () => {
    it('TodoList component must render without crashing', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Provider store={mockStoreInitialized}>
                    <TodoList />
                </Provider>
            </BrowserRouter>);
        expect(wrapper.exists()).toEqual(true);
    });

});
