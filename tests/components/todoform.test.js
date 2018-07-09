import 'jsdom-global/register';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoForm from '../../src/components/todoform/todoform.jsx';

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
      todo: todoMock,
      changeDialogField: jest.fn()
    };
    const wrapper = shallow(<TodoForm { ...propsMock } />);

    expect(wrapper.state('subtask')).toBe(null);
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'test'
      }
    });
    expect(propsMock.changeDialogField).toHaveBeenCalledWith({ title: 'test' });
  });

  it('Add subtask into state', () => {
    const wrapper = shallow(<TodoForm todo={ todoMock } />);
    wrapper.setState({ subtaskAdding: true });

    expect(wrapper.state('subtask')).toBe(null);
    wrapper.find('input[name="subtask"]').simulate('change', {
      target : {
        name: 'subtask',
        value: 'test'
      }
    });
    expect(wrapper.state('subtask')).toBe('test');
  });
});