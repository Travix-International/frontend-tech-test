import React from 'react';
import { mount } from 'enzyme';
import TaskList from './TaskList';
import { TaskItem } from '../TaskItem';

const tasks = [
  { id: 'td_1', title: 'todo', description: 'todo', completed: false },
  { id: 'td_2', title: 'todo2', description: 'todo2', completed: false }
];

describe('TaskList', () => {
  it('should render task list', () => {
    const wrapper = mount(<TaskList tasks={tasks} />);
    expect(wrapper.find(TaskItem)).toHaveLength(2);
  });
});