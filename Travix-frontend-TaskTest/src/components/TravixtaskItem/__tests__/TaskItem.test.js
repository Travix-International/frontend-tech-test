import React from 'react';
import { shallow } from 'enzyme';
import TravixtaskItem from '../TravixtaskItem';

const props = {
  task: { id: 5, title: 'asdasd', description: 'asdas' },
  onTaskSelected: jest.fn(),
};

describe('<TravixtaskItem /> Tests', () => {
  it('should render TaskItem properly', () => {
    const wrapper = shallow(<TravixtaskItem {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call handler when TaskItem clicked', () => {
    const wrapper = shallow(<TravixtaskItem {...props} />);
    wrapper.find('.Taskwrap').simulate('click');
    expect(props.onTaskSelected).toHaveBeenCalled();
  });
});
