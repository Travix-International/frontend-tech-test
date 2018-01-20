import React from 'react'
import { shallow } from 'enzyme'

import AddTodoForm from 'components/AddTodoForm'

describe('<AddTodoForm />', () => {
  it('should render the addTodoForm', () => {
    const wrapper = shallow(<AddTodoForm />)

    expect(wrapper.find('form')).toHaveLength(1)
    expect(wrapper.find('Input')).toHaveLength(2)
  })
})
