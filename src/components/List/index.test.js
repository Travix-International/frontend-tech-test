import React from 'react';
import { mount } from 'enzyme';
import TodoList from '.';


describe('Todo List Component', () => {

  const editTodo = jest.fn();
  const deleteTodo = jest.fn();
  const todos = [
    {
      "id": 1,
      "title": "Patrick's TODO Item 1: Do Nothing",
      "completed": false
    },
    {
      "id": 2,
      "title": "Patrick's TODO Item 2: Do Nothing",
      "completed": false
    }
  ]
  const wrapper = mount(<TodoList
    todos={todos}
    isFetching={false}
    editTodo={editTodo}
    deleteTodo={deleteTodo}
  />);

  it('should render list for iterating todos', () => {
    expect(wrapper.find('ul.ui-list').length).toBe(1);
  });

  it('should render todo list for two todo item', () => {
    expect(wrapper.find('.ui-list__item').length).toBe(2);
  });

  

});
