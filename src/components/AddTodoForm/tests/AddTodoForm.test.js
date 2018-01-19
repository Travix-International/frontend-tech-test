import React from 'react'
import { shallow } from 'enzyme'

import AddTodoForm from 'components/AddTodoForm'

describe('<AddTodoForm />', () => {
  it('should render the addTodoForm', () => {
    const handler = jest.fn()
    const wrapper = shallow(<AddTodoForm handleSubmit={handler} />)

    expect(wrapper.find('form')).toHaveLength(1)
    expect(wrapper.find('Input')).toHaveLength(2)
  })

  it('should trigger handleSubmit on form submit', () => {
    const handler = jest.fn()
    const wrapper = shallow(<AddTodoForm handleSubmit={handler} />)

    wrapper.find('form').simulate('submit')

    expect(handler).toHaveBeenCalled()
  })
})
