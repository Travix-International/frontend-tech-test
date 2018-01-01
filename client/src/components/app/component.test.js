import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './component';

const setup = () => {
    const defaultStore = {
        popup: { current: null },
        todos: [],
        todoFofm: {
            action: 'add',
            title: '',
            description: '',
            id: '',
        },
        loading: false,
    };

    const actions = {
        getTodos: jest.fn(),
        handleAddClick: jest.fn(),
    };

    const component = mount(
        <Provider store={configureStore()(defaultStore)}>
            <App {...actions} />
        </Provider>
    );

    return {
        component,
        actions,
    };
};

describe('App component', () => {
    it('should render header', () => {
        const { component } = setup();
        expect(component.find('header').length).toEqual(1);
    });

    it('should render title', () => {
        const { component } = setup();
        expect(component.find('.app__title').text()).toEqual('Todo list');
    });

    it('should render body', () => {
        const { component } = setup();
        expect(component.find('.app__body').length).toEqual(1);
    });

    it('should render TodoList', () => {
        const { component } = setup();
        expect(component.find('TodoList').length).toEqual(1);
    });

    it('should fetch todos', () => {
        const { actions } = setup();
        expect(actions.getTodos).toBeCalled();
    });

    it('button click should call handleAddClick', () => {
        const { component, actions } = setup();
        const button = component.find('Button');
        button.simulate('click');
        expect(actions.handleAddClick).toBeCalled();
    });
});
