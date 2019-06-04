import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toHaveTextContent } from 'jest-dom';

import WithStoreTasksHeader, { TasksHeader } from './TasksHeader';
import reducer from '../../store/reducer';


expect.extend({ toHaveTextContent });

describe('TasksHeader Component', () => {
  afterEach(cleanup);

  it('render title correctly', () => {
    const { getByText } = render(
      <Provider store={createStore(reducer)}>
        <WithStoreTasksHeader />
      </Provider>,
    );
    expect(getByText('tasks')).toHaveTextContent('tasks');
  });

  it('should call setSelectedTask with add-task button click', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <TasksHeader setSelectedTask={mockFn} />,
    );
    const addTaskButton = container.querySelector('#add-task');
    fireEvent.click(addTaskButton);
    expect(mockFn).toHaveBeenCalledWith({});
  });
});
