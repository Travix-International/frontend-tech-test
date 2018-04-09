import React from 'react';
import { shallow } from 'enzyme';
import TaskEditor from '../TaskEditor';

jest.mock('react-redux', () => ({ connect: () => Component => Component }));

const props = {
  onChange: jest.fn(),
  onPanelClose: jest.fn(),
  task: {
    id: 1,
    title: 'Test',
    description: 'test',
  },
  createTask: jest.fn(),
  deleteTask: jest.fn(),
  inProgress: false,
  updateTask: jest.fn(),
};

describe('<TaskEditor /> Tests', () => {
  it('should render TaskEditor properly', () => {
    const wrapper = shallow(<TaskEditor {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call proper actions when saved', () => {
    const wrapper = shallow(<TaskEditor {...props} />);
    wrapper.find('.TaskEditor__saveButton').simulate('click');
    expect(props.updateTask).toHaveBeenCalled();

    wrapper.setProps({ task: { title: '', description: '' } });
    wrapper.find('.TaskEditor__saveButton').simulate('click');
    expect(props.createTask).toHaveBeenCalled();
  });

  it('should call proper actions when deleted', () => {
    const wrapper = shallow(<TaskEditor {...props} />);
    wrapper.find('.TaskEditor__deleteButton').simulate('click');
    expect(props.deleteTask).toHaveBeenCalled();
  });

  it('should update when task when new one is fetched', () => {
    const wrapper = shallow(<TaskEditor {...props} />);
    const task = { id: 5, title: 'asdasd', description: 'asdas' };
    wrapper.setProps({ task });
    expect(wrapper.state('task')).toEqual(task);
  });
});
