import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

import TodoRow from 'components/TodoList/TodoRow'

describe('<TodoRow />', () => {
  const todo = fromJS({
    title: 'A todo',
    description: 'Do me!',
    id: '1',
    done: false,
  })

  let handler
  let wrapper

  beforeEach(() => {
    handler = jest.fn()
    wrapper = shallow(<TodoRow
      handleComplete={handler}
      handleDelete={handler}
      handleEdit={handler}
      todo={todo}
    />)
  })

  it('should render a todo row', () => {
    expect(wrapper.find('li')).toHaveLength(1)
    expect(wrapper.hasClass('todoRow')).toEqual(true)
  })

  it('should render a "done" todo row', () => {
    const doneTodo = fromJS({
      title: 'A todo',
      description: 'Do me!',
      id: '2',
      done: true,
    })
    const doneWrapper = shallow(<TodoRow
      handleComplete={handler}
      handleDelete={handler}
      handleEdit={handler}
      todo={doneTodo}
    />)

    expect(doneWrapper.hasClass('completed')).toEqual(true)
  })

  it('should trigger handleEdit when the edit icon is clicked', () => {
    wrapper.find('Icon[name="EDIT"]').simulate('click')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should trigger handleDelete when the delete icon is clicked', () => {
    wrapper.find('Icon[name="DELETE"]').simulate('click')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should trigger handleComplete when the checkbox changes', () => {
    wrapper.find('Checkbox').dive().find('input').simulate('change')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should update only when the todo prop has changed', () => {
    const shouldNotUpdate = wrapper.instance().shouldComponentUpdate({ todo })
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ todo: todo.set('id', '2') })

    expect(shouldUpdate).toBe(true)
    expect(shouldNotUpdate).toBe(false)
  })
})
