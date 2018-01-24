import React from 'react'
import { shallow } from 'enzyme'

import Input from 'components/Input'

describe('<Input />', () => {
  const name = 'pánfilo'

  it('should render an input with default props', () => {
    const wrapper = shallow(<Input input={{ name }} />)

    const inputProps = wrapper.find('input').props()

    expect(wrapper.find('input')).toHaveLength(1)
    expect(inputProps).toHaveProperty('type', 'text')
    expect(inputProps.className).toMatch(/input/)
  })

  it('should render an input with placeholder', () => {
    const text = 'My placeholder'
    const wrapper = shallow(<Input input={{ name }} placeholder={text} />)

    expect(wrapper.find('input').prop('placeholder')).toEqual(text)
  })

  it('should render a disabled input', () => {
    const wrapper = shallow(<Input input={{ name }} isDisabled />)

    expect(wrapper.find('input').prop('disabled')).toEqual(true)
  })

  it('should be able to render different types of inputs', () => {
    const wrapperText = shallow(<Input input={{ name }} type="text" />)
    const wrapperPassword = shallow(<Input input={{ name }} type="password" />)
    const wrapperEmail = shallow(<Input input={{ name }} type="email" />)
    const wrapperUrl = shallow(<Input input={{ name }} type="url" />)
    const wrapperSearch = shallow(<Input input={{ name }} type="search" />)
    const wrapperTel = shallow(<Input input={{ name }} type="tel" />)

    expect(wrapperText.find('input').props()).toHaveProperty('type', 'text')
    expect(wrapperPassword.find('input').props()).toHaveProperty('type', 'password')
    expect(wrapperEmail.find('input').props()).toHaveProperty('type', 'email')
    expect(wrapperUrl.find('input').props()).toHaveProperty('type', 'url')
    expect(wrapperSearch.find('input').props()).toHaveProperty('type', 'search')
    expect(wrapperTel.find('input').props()).toHaveProperty('type', 'tel')
  })

  it('should be able to render a darker version', () => {
    const wrapper = shallow(<Input input={{ name }} isDark />)

    const inputProps = wrapper.find('input').props()

    expect(inputProps.className).toMatch(/dark/)
  })

  it('should be able to render a block version', () => {
    const wrapper = shallow(<Input input={{ name }} isBlock />)

    const inputProps = wrapper.find('input').props()

    expect(inputProps.className).toMatch(/block/)
  })

  it('should be able to render in error state', () => {
    const wrapper = shallow(<Input input={{ name }} meta={{ invalid: true, touched: true }} />)

    const inputProps = wrapper.find('input').props()

    expect(inputProps.className).toMatch(/error/)
  })

  it('should accept onBlur event', () => {
    const handler = jest.fn()
    const wrapper = shallow(<Input input={{ name, onBlur: handler }} />)

    wrapper.find('input').simulate('blur')
    expect(handler).toBeCalled()
  })

  it('should accept onFocus event', () => {
    const handler = jest.fn()
    const wrapper = shallow(<Input input={{ name, onFocus: handler }} />)

    wrapper.find('input').simulate('focus')
    expect(handler).toBeCalled()
  })

  it('should accept onChange event', () => {
    const handler = jest.fn()
    const wrapper = shallow(<Input input={{ name, onChange: handler }} />)

    wrapper.find('input').simulate('change')
    expect(handler).toBeCalled()
  })

  it('should be able to set an initial value', () => {
    const fixture = 'I\'ve got soul but I\'m not a soldier'
    const wrapper = shallow(<Input input={{ name }} value={fixture} />)

    expect(wrapper.prop('value')).toEqual(fixture)
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Input input={{ name }} onClick={onClick} someRandomProp="HELLO" />)

    const inputProps = wrapper.props()

    wrapper.simulate('click')

    expect(inputProps).toHaveProperty('onClick')
    expect(inputProps).toHaveProperty('someRandomProp', 'HELLO')
    expect(onClick).toBeCalled()
  })

  it('should render an error message', () => {
    const error = 'This is my error message'
    const meta = {
      invalid: true,
      touched: true,
      error,
    }
    const wrapper = shallow(<Input input={{ name }} meta={meta} />)

    expect(wrapper.find('em').text()).toEqual(expect.stringContaining(error))
  })
})
