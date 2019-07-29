import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import configureStore from 'redux-mock-store';
import { initialState } from 'client/src/apps/reducers';
import { shallow , mount } from 'enzyme';
const expect = require('expect');
import thunk from 'redux-thunk';

import Root from 'client/src/apps/Root';
import AddToDo from 'client/src/apps/AddToDo';
import TodoList from 'client/src/apps/TodoList';
import TextField from 'sleek-ui/Input';
import Button from 'sleek-ui/Button';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);
const store = mockStore({
    todos: initialState
});

describe('Test Todo Dashboard component', () => {
    it('Should render the root component', () => {
        const wrapper = shallow(<Root store={store} />);

        const component = wrapper.dive();
        expect(component.exists()).toBe(true);
        expect(component.find(AddToDo).length).toEqual(1);
        expect(component.find(TodoList).length).toEqual(3);
    });

    it('Should render the AddToDo component', async () => {
        const addToDo = jest.fn().mockImplementation(() => Promise.resolve('added'));

        const wrapper = shallow(<AddToDo addToDo={addToDo} store={store} />);

        AddToDo.prototype.setState = jest.fn();
        const component = wrapper.dive();
        expect(component.exists()).toBe(true);
        expect(component.find(TextField).length).toEqual(2);
        expect(component.find(Button).length).toEqual(1);

        component.find(Button).prop('onClick')();
        expect(wrapper.state('todoDesc')).toEqual('');
        expect(wrapper.state('todoTitle')).toEqual('');
    });

    it('Should render the TodoList component', async () => {
        const attachDragEnd = jest.fn();
        const wrapper = shallow(<TodoList attachDragEnd={attachDragEnd} store={store} />);

        const component = wrapper.dive();
        expect(component.exists()).toBe(true);
    });
});
