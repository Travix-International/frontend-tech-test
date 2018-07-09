import 'jsdom-global/register';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoForm from '../../src/components/todoform/todoform.jsx';
import Input from '../../src/components/shared/input/input.jsx';

enzyme.configure({ adapter: new Adapter() });

const todoMock = {
  title: '',
  description: '',
  subtasks: [],
  tags: []
};

describe('TodoForm Component', () => {
  it('Render', () => {
    const wrapper = shallow(<TodoForm todo={ todoMock } />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Field changing', () => {
    const propsMock = {
      changeDialogField: jest.fn(),
      todo: todoMock
    };
    const wrapper = shallow(<TodoForm { ...propsMock } />);

    wrapper.find(Input).prop('onChange')('test', 'title');
    expect(propsMock.changeDialogField).toHaveBeenCalledWith({ title: 'test' });
  });
  
  it('List field changing', () => {
    const propsMock = {
      changeDialogListField: jest.fn(),
      todo: todoMock
    };
    const wrapper = shallow(<TodoForm { ...propsMock } />);

    wrapper.find('DelayedInput[name="subtasks"]').prop('onChange')('test', 'subtask');
    expect(propsMock.changeDialogListField).toHaveBeenCalledWith({
      value: 'test',
      name: 'subtask'
    });
  });
});