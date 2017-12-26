/* global jest, it, expect */
import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  const deleteTodo = jest.fn();
  const editTodo = jest.fn();

  const todo = {
    id: 1,
    title: 'some todo test',
    completed: true
  };

  const wrapper = shallow(
    <TodoItem onDelete={deleteTodo} onEdit={editTodo} todo={todo} />
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
    expect(wrapper.find('.item-text').props().defaultValue).toBe(todo.title);
  });

  it('should call editTodo when user toggle the task', () => {
    wrapper.find('.item-toggle').simulate('click');
    expect(editTodo).toBeCalled();
  });

  it('should call editTodo when user edit task text', () => {
    wrapper
      .find('.item-text')
      .simulate('change', { target: { value: 'New value' } });

    expect(editTodo).toBeCalled();
  });

  it('should call deleteTodo when user clicks the last button', () => {
    wrapper.find('.item-delete').simulate('click');
    expect(deleteTodo).toBeCalled();
  });
});
