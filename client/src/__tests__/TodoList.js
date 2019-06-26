import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TodoList } from '../components/TodoList';
import renderer from 'react-test-renderer';

describe('Create Component', () => {
  let props;
  const mockfn = jest.fn();

  beforeEach(() => {
    props = {
        fetchTodoList : mockfn,
        deleteTodo: mockfn,
        getTodoList : [{
            id: 1,
            title: 'test title',
            description: 'test desc'
        }]

    };
  });

  it('renders without crashing', () => {
    const tree = renderer.create(
        <BrowserRouter>
        <TodoList {...props} />
        </BrowserRouter>)
    expect(tree.toJSON()).toMatchSnapshot();
  });
});