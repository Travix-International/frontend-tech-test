import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, configure, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from './TodoListComponent';
import Websocket from 'react-websocket';


configure({ adapter: new Adapter() });

const actions = {
  fetchTodos: jest.fn(),
  createNewEmptyTodo: jest.fn(),
};

const todoListElement = <TodoList {...actions} tasks={[]}/>;

beforeAll(() => {
  shallow(todoListElement);
});

describe('TODO list', () =>{

  it('should fetch todos', () => {
    expect(actions.fetchTodos).toBeCalled();
  });

  it('add new todo', () => {
    const element = shallow(todoListElement);
    const addButton = element.find('.add-button');
    addButton.simulate('click');
    expect(actions.createNewEmptyTodo).toBeCalled();
  });


});
