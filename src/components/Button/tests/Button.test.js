import React from 'react'
import { shallow, mount } from 'enzyme'

import Button from 'components/Button'

describe('<Button />', () => {
  it('should render a button with default props', () => {
    const content = 'Hola Bebe'
    const wrapper = shallow(<Button>{content}</Button>)

    const buttonProps = wrapper.props()

    expect(buttonProps).toHaveProperty('children', content)
    expect(buttonProps).toHaveProperty('type', 'button')
    expect(buttonProps.className).toMatch(/button/)
  })

  it('should be able to render different styles of buttons based on the `kind` prop', () => {
    const primaryWrapper = shallow(<Button kind="primary" />)
    const secondaryWrapper = shallow(<Button kind="secondary" />)
    const flatWrapper = shallow(<Button kind="flat" />)
    const destructiveWrapper = shallow(<Button kind="destructive" />)
    const warningWrapper = shallow(<Button kind="warning" />)

    expect(primaryWrapper.props().className).toMatch(/primary/)
    expect(secondaryWrapper.props().className).toMatch(/secondary/)
    expect(flatWrapper.props().className).toMatch(/flat/)
    expect(destructiveWrapper.props().className).toMatch(/destructive/)
    expect(warningWrapper.props().className).toMatch(/warning/)
  })

  it('should render an anchor tag when an `href` prop is passed', () => {
    const link = 'http://wepow.com'
    const wrapper = shallow(<Button href={link} />)

    const buttonProps = wrapper.props()

    expect(wrapper.find('a')).toHaveLength(1)
    expect(buttonProps).toHaveProperty('href', link)
  })

  it('should render as block when `isBlock` is passed', () => {
    const wrapper = shallow(<Button isBlock />)

    const buttonProps = wrapper.props()

    expect(buttonProps.className).toMatch(/block/)
  })

  it('should render different sizes of button', () => {
    const wrapperShort = shallow(<Button isShort />)
    const wrapperSlim = shallow(<Button isSlim />)

    expect(wrapperShort.props().className).toMatch(/short/)
    expect(wrapperSlim.props().className).toMatch(/slim/)
  })

  it('should render a loading state when `isWorking` is true', () => {
    const wrapper = shallow(<Button isWorking />)

    const buttonProps = wrapper.props()

    expect(buttonProps.className).toMatch(/working/)
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button onClick={onClick} someRandomProp="HELLO" />)

    wrapper.simulate('click')

    expect(onClick).toBeCalled()
    expect(wrapper.props()).toHaveProperty('someRandomProp', 'HELLO')
  })

  it('should be able to be disabled', () => {
    const onClick = jest.fn()
    // Using `mount` because `shallow` fails the test.
    // More info: https://github.com/airbnb/enzyme/issues/386
    const wrapper = mount(<Button disabled onClick={onClick} />)

    const buttonProps = wrapper.props()

    wrapper.simulate('click')

    expect(buttonProps).toHaveProperty('disabled')
    expect(onClick).not.toBeCalled()
  })
})
