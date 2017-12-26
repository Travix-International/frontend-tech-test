/* global jest, it, expect */
import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

describe('<AddTodo />', () => {
  const addTodo = jest.fn();

  const wrapper = shallow(<AddTodo onAdd={addTodo} />);

  it('should render a todo item', () => {
    expect(wrapper.find('.add-todo').length).toBe(1);
  });

  it('should render a text input', () => {
    expect(wrapper.find('.input').length).toBe(1);
  });

  it('should call addTodo when user hit Enter key', () => {
    wrapper
      .find('form')
      // .simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });
      .simulate('submit', {
        preventDefault: jest.fn()
      });
    expect(addTodo).toBeCalled();
  });
});
