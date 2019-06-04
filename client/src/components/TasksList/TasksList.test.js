import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, cleanup } from '@testing-library/react';
import { toHaveTextContent } from 'jest-dom';

import TasksList from './TasksList';
import reducer from '../../store/reducer';

expect.extend({ toHaveTextContent });
const task = {
  id: '1',
  title: 'title',
  description: 'description',
  completed: false,
};

describe('TasksList Component', () => {
  afterEach(cleanup);

  it('render 3 tasks correctly', () => {
    const { container } = render(
      <Provider store={createStore(reducer)}>
        <TasksList height={200} tasks={Array(3).fill(task)} />
      </Provider>,
    );
    expect(container.querySelectorAll('[role="button"]').length).toBe(3);
  });

  it('render 5 out of 300 tasks correctly', () => {
    const { container } = render(
      <Provider store={createStore(reducer)}>
        <TasksList height={200} tasks={Array(300).fill(task)} />
      </Provider>,
    );
    expect(container.querySelectorAll('[role="button"]').length).toBe(5);
  });
});
