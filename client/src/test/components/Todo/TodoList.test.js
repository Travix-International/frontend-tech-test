import React from 'react'
import { mount } from 'enzyme'

import TodoList from '../../../components/TodoList'
import TodoListItem from '../../../components/TodoListItem'

describe('TodoList component', () => {
  const props = {
    editedTodoId: '',
    todoList: [
      { id: '1', title: 'title', description: 'description' },
      { id: '2', title: 'title', description: 'description' },
      { id: '3', title: 'title', description: 'description' }
    ],
    deleteTodoRequest: jest.fn(),
    editTodoRequest: jest.fn(),
    toggleEditMode: jest.fn()
  }

  it('should render TodoListItems', () => {
    const wrapper = mount(<TodoList {...props} />)

    expect(wrapper.find(TodoListItem).length).toBe(props.todoList.length)
  })
})
