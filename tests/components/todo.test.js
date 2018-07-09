import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from 'react-toolbox/lib/checkbox';

import Todo from '../../src/components/todo/todo.jsx';

enzyme.configure({ adapter: new Adapter() });

const todoMock = {
  title: '',
  description: '',
  tags: [],
  subtasks: [],
  isDone: false
};

describe('Todo Component', () => {
  it('Render', () => {
    const wrapper = shallow(<Todo todo={ todoMock } />);
    const component = wrapper;

    expect(component.exists()).toBe(true);
  });

  it('Switch progress', () => {
    const propsMock = {
      updateTodo: jest.fn(),
      todo: todoMock
    };
    const wrapper = shallow(<Todo { ...propsMock } />);

    wrapper.find(Checkbox).prop('onChange')();
    expect(propsMock.updateTodo).toHaveBeenCalledWith({
      ...propsMock.todo,
      isDone: !propsMock.todo.isDone
    });
  });
});