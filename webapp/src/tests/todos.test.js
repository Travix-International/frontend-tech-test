import { render, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import TodoList from '../modules/Todos/TodosList';
import TodoItem from '../modules/Todos/TodoItem';
import { actions as todoActions } from '../redux/modules/todos';

configure({ adapter: new Adapter() });

const todoListProps = {
  todoActions,
  todos: [
    {
      id: 0,
      title: 'foo',
      description: 'bar'
    },
    {
      id: 1,
      title: 'Foo',
      description: 'Bar'
    }
  ]
}

describe('Todo Components', () => {
  it('renders TodoList correctly', () => {
    const todoList = shallow(<TodoList {...todoListProps} />);
    expect(todoList.find(TodoItem)).toHaveLength(2);
  });

  it('renders TodoItem correctly', () => {
    const todoItem = render(<TodoItem
      todo={todoListProps.todos[0]}
      updateTodo={todoListProps.todoActions.updateTodo}
      deleteTodo={todoListProps.todoActions.deleteTodo}
    />);

    expect(todoItem.text()).toContain('foo');
  });
});
