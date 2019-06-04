import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toHaveTextContent } from 'jest-dom';

import WithStoreTaskItem, { TaskItem } from './TaskItem';
import reducer from '../../store/reducer';

expect.extend({ toHaveTextContent });
const task = {
  id: '1',
  title: 'title',
  description: 'description',
  completed: false,
};

describe('TaskItem Component', () => {
  afterEach(cleanup);

  it('render title and description correctly', () => {
    const { getByText } = render(
      <Provider store={createStore(reducer)}>
        <WithStoreTaskItem style={{}} task={task} />
      </Provider>,
    );
    expect(getByText(task.title)).toHaveTextContent(task.title);
    expect(getByText(task.description)).toHaveTextContent(task.description);
  });

  it('should call setSelectedTask via double click with task', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <TaskItem setSelectedTask={mockFn} style={{}} task={task} />,
    );
    fireEvent.dblClick(container.querySelector('[role="button"]'));
    expect(mockFn).toHaveBeenCalledWith(task);
  });
});
