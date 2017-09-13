import React from 'react';
import { shallow } from 'enzyme';
import Component from '.';

describe('<Item />', () => {
  const deleteTodo = jest.fn();
  const editTodo = jest.fn();
  const todo = {
    id: 59389998,
    title: 'cupidatat incididunt velit ut',
    completed: true
  };

  const wrapper = shallow(
    <Component
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      todo={todo}
    />
  );

  it('should render a check span on the first button', () => {
    expect(wrapper.find('.checkIcon').length).toBe(1);
  });

  it('should render a custom class on input if completed is true', () => {
    expect(wrapper.find('.editInput').hasClass('completed')).toEqual(true);
  });

  it('should render an input it defaultValue equals the title prop', () => {
    expect(wrapper.find('.editInput').props().defaultValue).toBe(todo.title);
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
