import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListCheckbox } from 'react-toolbox/lib/list';

import DialogData from '../../src/components/dialogdata/dialogdata.jsx';

enzyme.configure({ adapter: new Adapter() });

const todoMock = {
  title: '',
  description: '',
  subtasks: [
    {
      name: 'test',
      isDone: false
    }
  ],
  tags: []
};

describe('DialogData Component', () => {
  it('Render', () => {
    const wrapper = shallow(<DialogData todo={ todoMock } />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Check subtask', () => {
    const propsMock = {
      updateTodo: jest.fn(),
      todo: todoMock
    };
    const wrapper = shallow(<DialogData { ...propsMock } />);

    wrapper.find(ListCheckbox).prop('onChange')();
    expect(propsMock.updateTodo).toHaveBeenCalled();
  });
});