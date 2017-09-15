import React from 'react';
import { mount } from 'enzyme';
import Item from '.';

describe('List Item Component', () => {
  const deleteTodo = jest.fn();
  const editTodo = jest.fn();
  const todo = {
    "id": 46769446,
    "title": "velit ullamco amet enim",
    "completed": true
  };

  const wrapper = mount(
    <Item
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      todo={todo}
    />
  );

  it('should render a check span on the first button', () => {
    expect(wrapper.find('.ui-checkbox').length).toBe(1);
  });

  it('should render a custom class on input if completed is true', () => {
    expect(wrapper.find('.editInput').hasClass('completed')).toEqual(true);
  });


  it('should render an input it defaultValue equals the title prop', () => {
    expect(wrapper.find('.editInput').props().defaultValue).toBe(todo.title);
  });

  it('should call deleteTodo when user clicks the last button', () => {
    wrapper.find('.ui-button_remove').simulate('click');
    expect(deleteTodo).toBeCalled();
  });
});
