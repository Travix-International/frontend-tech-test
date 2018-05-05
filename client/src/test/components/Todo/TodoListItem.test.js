import React from 'react'
import { shallow } from 'enzyme'

import TodoListItem from '../../../components/TodoListItem'

describe('TodoListItem component', () => {
  const props = {
    deleteTodoRequest: jest.fn(),
    toggleEditMode: jest.fn(),
    todo: {
      id: 'id',
      title: 'title',
      description: 'description'
    }
  }

  it('should toggle Edit Mode on double click', () => {
    const wrapper = shallow(<TodoListItem {...props} />)

    wrapper.find('.item-container').simulate('dblclick')
    expect(props.toggleEditMode).toHaveBeenCalled()
  })

  it('should delete item after click on red cross', () => {
    const wrapper = shallow(<TodoListItem {...props} />)

    wrapper.find('.delete-btn').simulate('click')
    expect(props.deleteTodoRequest).toHaveBeenCalled()
  })
})
