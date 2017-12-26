import React from 'react';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  const deleteTodo = jest.fn();
  const editTodo = jest.fn();
  const toggleTodo = jest.fn();

  const todo = {
    id: 1,
    title: 'some todo test',
    completed: true
  };

  const wrapper = shallow(
    <TodoItem
      onDelete={deleteTodo}
      onEdit={editTodo}
      onToggle={toggleTodo}
      todo={todo}
    />
  );

  it('should render a todo item', () => {
    expect(wrapper.find('.todo-item').length).toBe(1);
  });

  it('should render a checkbox button', () => {
    expect(wrapper.find('.item-toggle').length).toBe(1);
  });

  it('should render a text input', () => {
    expect(wrapper.find('.item-text').length).toBe(1);
  });

  it('should render a delete button', () => {
    expect(wrapper.find('.item-delete').length).toBe(1);
  });

  it('should render an input with value equal to title prop', () => {
    expect(wrapper.find('.item-title').props().value).toBe(todo.title);
  });

  it('should call editTodo when user clicks the first button', () => {
    wrapper.find('.active').simulate('click');
    expect(editTodo).toBeCalled();
  });

  it('should call deleteTodo when user clicks the last button', () => {
    wrapper.find('.remove').simulate('click');
    expect(deleteTodo).toBeCalled();
  });
});
