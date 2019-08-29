import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import configureStore from 'redux-mock-store';
import { initialState } from 'client/src/apps/reducers';
import { shallow , mount } from 'enzyme';
const expect = require('expect');
import thunk from 'redux-thunk';
import {
    Root as RootComponent
} from 'client/src/apps/Root';
import {
    TodoList as TodoListComponent
} from 'client/src/apps/TodoList';
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

    it('Should test onDragStart Function of the root component', () => {
        
        const wrapper2 = shallow(<RootComponent transferTask={jest.fn()} store={store} />);

        const instance = wrapper2.instance();
        
        instance.onDragStart(1, 'DRAFT');

        expect(wrapper2.state('itemDraggedId')).toEqual(1);
        expect(wrapper2.state('itemDraggedType')).toEqual('DRAFT');

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

    it('Should test handleEdit/discardEdit/onChange Function of the TodoList component', () => {
        
        const wrapper2 = shallow(<TodoListComponent tasks={{
            1: {
                title: 't1',
                description: 'd1'
            }
        }} attachDragEnd={jest.fn()} store={store} />);

        const instance = wrapper2.instance();
        
        instance.handleEdit(1);

        expect(wrapper2.state('toBeEdited')).toEqual(1);

        instance.discardEdit();

        expect(wrapper2.state('toBeEdited')).toEqual(null);


        instance.onChange('title');

        expect(wrapper2.state('updatedTitle')).toEqual('title');

    });
});
