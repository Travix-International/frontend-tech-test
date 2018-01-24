import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

import TodoList from 'components/TodoList'

describe('<TodoList />', () => {
  const todos = fromJS([
    { title: 'A todo', description: 'Do me!', id: '1', done: false },
    { title: 'A todo', description: 'Do me!', id: '2', done: true },
    { title: 'A todo', description: 'Do me!', id: '3', done: false },
    { title: 'A todo', description: 'Do me!', id: '4', done: true },
  ])

  it('should render a list of todos', () => {
    const noop = jest.fn()
    const wrapper = shallow(<TodoList
      handleComplete={noop}
      handleDelete={noop}
      todos={todos}
    />)

    const first = wrapper.find('TodoRow').first()

    expect(wrapper.find('ul')).toHaveLength(1)
    expect(wrapper.find('ul').hasClass('todoList')).toEqual(true)
    expect(wrapper.find('TodoRow')).toHaveLength(4)
    expect(first.props()).toHaveProperty('handleComplete')
    expect(first.props()).toHaveProperty('handleDelete')
  })
})
