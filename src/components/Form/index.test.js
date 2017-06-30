import React from 'react';
import { shallow } from 'enzyme';
import Component from '.';

describe('<Form />', () => {
  const createTodo = jest.fn();

  const wrapper = shallow(
    <Component
      createTodo={createTodo}
    />
  );

  it('should call createTodo with the input value on submit', () => {
    const string = 'test';
    wrapper.find('.input').simulate('change', { target: { value: string } });
    wrapper.simulate('submit', { preventDefault: () => {} });
    expect(createTodo).toBeCalled();
    expect(createTodo.mock.calls[0][0]).toEqual(string);
  });
});
