import React from 'react';
import { shallow } from 'enzyme';
import { ListGroupItem, Checkbox, Button } from 'react-bootstrap';

import TaskListItem from '../TaskListItem';
import Title from '../../../../common/Title';
import Description from '../../../../common/Description';

const task = {
  id: 1,
  title: 'Task Title',
  description: 'Task Description',
};

const taskListItem = shallow(<TaskListItem task={task} />);

describe('Tasks.List.TaskListItem', () => {
  it('should render a ListGroupItem', () => (
    expect(taskListItem.find(ListGroupItem).length).toBe(1)
  ));

  it('should render task title', () => (
    expect(taskListItem.find(Title).first().children().text()).toBe(task.title)
  ));

  it('should render task description', () => (
    expect(taskListItem.find(Description).first().children().text()).toBe(task.description)
  ));

  it('should render a task edit button', () => (
    expect(taskListItem.contains(<Button bsStyle="warning">Edit</Button>)).toBe(true)
  ));

  it('should render task complete checkbox', () => (
    expect(taskListItem.contains(<Checkbox />)).toBe(true)
  ));
});
