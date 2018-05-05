import React from 'react'
import { shallow } from 'enzyme'

import Todo from '../../../components/Todo'
import TodoAddForm from '../../../components/TodoAddForm'
import TodoList from '../../../components/TodoList'

describe('Todo component', () => {
  const props = {
    editedTodoId: '',
    todoList: [
      {
        id: '1',
        title: 'title',
        description: 'description'
      }
    ],
    addTodoRequest: jest.fn(),
    deleteTodoRequest: jest.fn(),
    editTodoRequest: jest.fn(),
    fetchTodoListRequest: jest.fn(),
    toggleEditMode: jest.fn(),
    pages: 1
  }

  it('should render TodoAddForm & TodoList components', () => {
    const wrapper = shallow(<Todo {...props} />)

    expect(wrapper.find(TodoAddForm).length).toBe(1)
    expect(wrapper.find(TodoList).length).toBe(1)
  })
})
