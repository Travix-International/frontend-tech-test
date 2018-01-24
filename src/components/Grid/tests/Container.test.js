import React from 'react'
import { shallow } from 'enzyme'

import { Container } from 'components/Grid'

describe('<Container />', () => {
  it('should render with default props', () => {
    const content = 'HOLA BB'
    const wrapper = shallow(<Container>{content}</Container>)

    const containerProps = wrapper.props()

    expect(containerProps.className).toMatch(/container/)
    expect(containerProps).toHaveProperty('children', content)
  })

  it('should render a fluid container if `isFluid` is true', () => {
    const wrapper = shallow(<Container isFluid />)

    const containerProps = wrapper.props()

    expect(containerProps.className).toMatch(/container-fluid/)
  })

  it('should be able to specify the element\'s tagName', () => {
    const wrapper = shallow(<Container tagName="section" />)

    const section = wrapper.find('section')

    expect(section).toHaveLength(1)
  })

  it('should accept extra classes', () => {
    const wrapper = shallow(<Container className="holabb" />)

    const containerProps = wrapper.props()

    expect(containerProps.className).toMatch(/holabb/)
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Container onClick={onClick} someRandomProp="HELLO" />)

    const containerProps = wrapper.props()

    wrapper.simulate('click')

    expect(containerProps).toHaveProperty('onClick')
    expect(containerProps).toHaveProperty('someRandomProp', 'HELLO')
    expect(onClick).toBeCalled()
  })
})
