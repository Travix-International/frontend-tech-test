import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from 'components/Checkbox'

describe('<Checkbox />', () => {
  it('should render with default props', () => {
    const name = 'pánfilo'
    const wrapper = shallow(<Checkbox input={{ name, checked: false }} />)
    const checkbox = wrapper.find('input')

    const checkboxProps = checkbox.props()

    expect(checkboxProps).toHaveProperty('checked', false)
    expect(checkboxProps).toHaveProperty('name', name)
    expect(checkboxProps).toHaveProperty('type', 'checkbox')
  })

  it('should render a checked checkbox', () => {
    const name = 'pánfilo'
    const wrapper = shallow(<Checkbox input={{ name, checked: true }} />)
    const checkbox = wrapper.find('input')

    const checkboxProps = checkbox.props()

    expect(checkboxProps).toHaveProperty('checked', true)
  })

  it('should render label or the left', () => {
    const name = 'pánfilo'
    const label = 'This is pánfilo'
    const wrapper = shallow(<Checkbox input={{ name }} label={label} labelPosition="left" />)

    const isSpanSecond = wrapper.childAt(1).type() === 'span'

    expect(isSpanSecond).toBeTruthy()
  })

  it('should accept onBlur event', () => {
    const name = 'pánfilo'
    const handler = jest.fn()
    const wrapper = shallow(<Checkbox input={{ name, onBlur: handler }} />)

    wrapper.find('input').simulate('blur')
    expect(handler).toBeCalled()
  })

  it('should accept onFocus event', () => {
    const name = 'pánfilo'
    const handler = jest.fn()
    const wrapper = shallow(<Checkbox input={{ name, onFocus: handler }} />)

    wrapper.find('input').simulate('focus')
    expect(handler).toBeCalled()
  })

  it('should accept onChange event', () => {
    const name = 'pánfilo'
    const handler = jest.fn()
    const wrapper = shallow(<Checkbox input={{ name, onChange: handler }} />)

    wrapper.find('input').simulate('change')
    expect(handler).toBeCalled()
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const name = 'pánfilo'
    const onClick = jest.fn()
    const wrapper = shallow(<Checkbox input={{ name }} onClick={onClick} someRandomProp="HELLO" />)

    wrapper.simulate('click')

    expect(onClick).toBeCalled()
    expect(wrapper.props()).toHaveProperty('someRandomProp', 'HELLO')
  })

  it('should be able to be disabled', () => {
    const name = 'pánfilo'
    const wrapper = shallow(<Checkbox input={{ name }} isDisabled />)
    const checkbox = wrapper.find('input')

    const checkboxProps = checkbox.props()

    expect(checkboxProps).toHaveProperty('disabled')
  })
})
