import React from 'react';
import { shallow } from 'enzyme';
import TaskItem from '../TaskItem';

const props = {
  task: { id: 5, title: 'asdasd', description: 'asdas' },
  onTaskSelected: jest.fn(),
};

describe('<TaskItem /> Tests', () => {
  it('should render TaskItem properly', () => {
    const wrapper = shallow(<TaskItem {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call handler when TaskItem clicked', () => {
    const wrapper = shallow(<TaskItem {...props} />);
    wrapper.find('.Task__wrapper').simulate('click');
    expect(props.onTaskSelected).toHaveBeenCalled();
  });
});
