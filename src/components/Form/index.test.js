import React from 'react';
import { mount } from 'enzyme';
import Form from '.';


describe('Form Component', () => {

  const addTodo = jest.fn();
  const wrapper = mount(<Form addTodo={addTodo}/>);

  it('should render an input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should call addTodo with input value on submit', () => {
    const string = 'test';
    wrapper.find('input').simulate('change', { target: { value: string } });
    wrapper.simulate('submit', { preventDefault: () => {} });
    expect(addTodo).toBeCalled();
    expect(addTodo.mock.calls[0][0]).toEqual(string);
  });
  
});
