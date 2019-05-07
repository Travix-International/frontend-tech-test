import React from 'react';
import { shallow } from 'enzyme';
import TaskItem from './TaskItem';
import { CustomInput } from 'reactstrap';

const completedTask = {
  id: 'td_1',
  title: 'todo',
  description: 'todo',
  completed: true
};

const activeTask = Object.assign({}, completedTask, { completed: false });

describe('TaskItem test', () => {
  it('should return null when task prop is undefined', () => {
    expect(shallow(<TaskItem />).type()).toBeNull();
  });

  it('should render component according to the status of task', () => {
    const wrapper = shallow(<TaskItem task={completedTask} />);
    expect(wrapper.find(CustomInput).props().checked).toBe(true);

    wrapper.setProps({ task: activeTask }).update();
    expect(wrapper.find(CustomInput).props().checked).toBe(false);
  });

  it('should assign class names correctly', () => {
    const wrapper = shallow(<TaskItem task={completedTask} />);
    expect(wrapper.find('.task-item-title').hasClass('completed')).toBe(true);
    wrapper.setProps({ task: activeTask }).update();
    expect(wrapper.find('.task-item-title').hasClass('completed')).toBe(false);
  });

  it('should call the prop functions in response to interactions', () => {
    const toggleFcn = jest.fn();
    const clickFcn = jest.fn();

    const wrapper = shallow(
      <TaskItem 
        task={activeTask} 
        onToggleTask={toggleFcn} 
        onClickTask={clickFcn} 
      />);

    wrapper.find({type: 'checkbox'}).simulate('change', { preventDefault() {} });
    wrapper.find('.task-item-title').simulate('click', { preventDefault() {} });
    expect(clickFcn).toBeCalled();
    expect(toggleFcn).toBeCalled();
  });
});