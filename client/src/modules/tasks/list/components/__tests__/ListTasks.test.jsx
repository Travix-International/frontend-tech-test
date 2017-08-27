import React from 'react';
import { shallow } from 'enzyme';

import ShowTasks from '../ListTasks';
import TasksList from '../TasksList';
import ErrorMessage from '../../../../common/ErrorMessage';
import LoadingMessage from '../../../../common/LoadingMessage';
import EmptyMessage from '../../../../common/EmptyMessage';

const tasks = [
  {
    id: 1,
    title: 'Task Title',
    description: 'Task Description',
  },
];

describe('Tasks.List.ListTasks', () => {
  it('should call fetchTasks prop when mounting', () => {
    const fetchTasks = jest.fn();

    shallow(<ShowTasks fetchTasks={fetchTasks} />);

    expect(fetchTasks.mock.calls.length).toBe(1);
  });

  it('should render a TasksList when there are tasks', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} tasks={tasks} />);

    expect(showTasks.find(TasksList).length).toBe(1);
  });

  it('should pass tasks props to TasksList', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} tasks={tasks} />);

    expect(showTasks.find(TasksList).first().prop('tasks')).toEqual(tasks);
  });

  it('should render an ErrorMessage when error prop is present', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} error="error" />);

    expect(showTasks.find(ErrorMessage).length).toBe(1);
  });

  it('should render an LoadingMessage when fetching', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} isFetching />);

    expect(showTasks.find(LoadingMessage).length).toBe(1);
  });

  it('should render an EmptyMessage when there is no tasks and is not fetching', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

    expect(showTasks.find(EmptyMessage).length).toBe(1);
  });

  describe('ShowTasks.getErrorMessage', () => {
    it('should return a message', () => {
      const fetchTasks = jest.fn();

      const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

      expect(showTasks.instance().getErrorMessage('message')).toEqual(<div>message</div>);
    });
  });

  describe('ShowTasks.getLoadingMessage', () => {
    it('should return a message', () => {
      const fetchTasks = jest.fn();

      const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

      expect(showTasks.instance().getLoadingMessage()).toEqual(<div>Loading Tasks</div>);
    });
  });

  describe('ShowTasks.getEmptyMessage', () => {
    it('should return a message', () => {
      const fetchTasks = jest.fn();

      const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

      expect(showTasks.instance().getEmptyMessage()).toEqual(<div>No Tasks Found</div>);
    });
  });
});
