import React from 'react';
import { shallow } from 'enzyme';

import List from '../../../../common/List';
import TasksList from '../TasksList';
import TaskListItem from '../TaskListItem';

const tasks = [
  {
    id: 1,
    title: 'Task Title',
    description: 'Task Description',
  },
];

const tasksList = shallow(<TasksList tasks={tasks} />);
const getTaskListItem = tasksList.instance().getTaskListItem;

describe('Tasks.List.TasksList', () => {
  it('should render a List', () => (
    expect(tasksList.find(List).length).toBe(1)
  ));

  it('should pass TasksList.getTaskListItem to List', () => {
    // Mock getTaskListItem
    tasksList.instance().getTaskListItem = jest.fn();

    // update component to pass mocked props
    tasksList.update();

    // get prop passed to List and call it
    tasksList.find(List).first().prop('renderListItem')();

    // check the prop called from the list is the same mocked getTaskListItem function
    expect(tasksList.instance().getTaskListItem.mock.calls.length).toBe(1);
  });

  it('should pass tasks  to List', () => (
    expect(tasksList.find(List).first().prop('items'))
      .toEqual(tasks)
  ));

  describe('TasksList.getTaskListItem', () => {
    it('should render a TaskListItem', () => (
      expect(getTaskListItem(tasks[0])).toEqual(<TaskListItem key={`TaskListItem-${tasks[0].id}`} task={tasks[0]} />)
    ));
  });
});
