import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toHaveTextContent } from 'jest-dom';

import WithStoreTaskDetailsDialog, { TaskDetailsDialog } from './TaskDetailsDialog';
import reducer from '../../store/reducer';
import { taskApi } from '../../api/api';

expect.extend({ toHaveTextContent });
const task = {
  id: '1',
  title: 'title',
  description: 'description',
  completed: false,
};

describe('TaskDetailsDialog Component', () => {
  afterEach(cleanup);

  it('render title and description correctly', () => {
    const { getByText } = render(
      <Provider store={createStore(reducer)}>
        <WithStoreTaskDetailsDialog fullScreen={false} open task={task} />
      </Provider>,
    );
    expect(getByText('Update Task')).toHaveTextContent('Update Task');
  });

  it('should call setSelectedTask at closing with null', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <TaskDetailsDialog fullScreen={false} open setSelectedTask={mockFn} task={task} />,
    );
    fireEvent.click(getByText('Cancel'));
    expect(mockFn).toHaveBeenCalledWith(null);
  });

  it('should update task', () => {
    const mockFn = jest.fn();
    const spy = jest.spyOn(taskApi, 'updateTask').mockImplementation(jest.fn());
    const { getByLabelText, getByText } = render(
      <TaskDetailsDialog fullScreen={false} open setSelectedTask={mockFn} task={task} />,
    );
    fireEvent.change(getByLabelText('Title'), { target: { value: 'updated title' } });
    fireEvent.click(getByText('Save'));
    expect(mockFn).toHaveBeenCalledWith(null);
    expect(spy).toHaveBeenCalledWith({ ...task, title: 'updated title' });
  });

  it('should add new task', () => {
    const mockFn = jest.fn();
    const spy = jest.spyOn(taskApi, 'addTask').mockImplementation(jest.fn());
    const { getByLabelText, getByText } = render(
      <TaskDetailsDialog fullScreen={false} open setSelectedTask={mockFn} task={{}} />,
    );
    fireEvent.change(getByLabelText('Title'), { target: { value: 'new title' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'new description' } });
    fireEvent.click(getByText('Save'));
    expect(mockFn).toHaveBeenCalledWith(null);
    expect(spy).toHaveBeenCalledWith('new title', 'new description');
  });

  it('should delete task', () => {
    const mockFn = jest.fn();
    const spy = jest.spyOn(taskApi, 'deleteTask').mockImplementation(jest.fn());
    const { getByLabelText } = render(
      <TaskDetailsDialog fullScreen={false} open setSelectedTask={mockFn} task={task} />,
    );
    fireEvent.click(getByLabelText('Delete Task'));
    expect(mockFn).toHaveBeenCalledWith(null);
    expect(spy).toHaveBeenCalledWith(task.id);
  });
});
