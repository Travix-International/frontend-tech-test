import React from 'react'
import { shallow } from 'enzyme'

import { Col } from 'components/Grid'

describe('<Col />', () => {
  it('should render with default props', () => {
    const content = 'hola bb'
    const wrapper = shallow(<Col>{content}</Col>)

    const colProps = wrapper.props()

    expect(colProps).toHaveProperty('children', content)
    expect(colProps.className).toMatch(/col/)
  })

  it('should be able to set `first` prop', () => {
    const wrapper = shallow(<Col first="xs" />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/first-xs/)
  })

  it('should be able to set `last` prop', () => {
    const wrapper = shallow(<Col last="xs" />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/last-xs/)
  })

  it('should be able to set `lg` prop', () => {
    const wrapper = shallow(<Col lg={2} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-lg-2/)
  })

  it('should be able to set `lgOffset` prop', () => {
    const wrapper = shallow(<Col lgOffset={4} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-lg-offset-4/)
  })

  it('should be able to set `md` prop', () => {
    const wrapper = shallow(<Col md={6} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-md-6/)
  })

  it('should be able to set `mdOffset` prop', () => {
    const wrapper = shallow(<Col mdOffset={1} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-md-offset-1/)
  })

  it('should be able to set `sm` prop', () => {
    const wrapper = shallow(<Col sm={8} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-sm-8/)
  })

  it('should be able to set `smOffset` prop', () => {
    const wrapper = shallow(<Col smOffset={2} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-sm-offset-2/)
  })

  it('should be able to set `xl` prop', () => {
    const wrapper = shallow(<Col xl={3} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-xl-3/)
  })

  it('should be able to set `xlOffset` prop', () => {
    const wrapper = shallow(<Col xl={4} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-xl-4/)
  })

  it('should be able to set `xs` prop', () => {
    const wrapper = shallow(<Col xs={10} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-xs-10/)
  })

  it('should be able to set `xsOffset` prop', () => {
    const wrapper = shallow(<Col xsOffset={4} />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/col-xs-offset-4/)
  })

  it('should be able to specify the element\'s tagName', () => {
    const wrapper = shallow(<Col tagName="section" />)

    const section = wrapper.find('section')

    expect(section).toHaveLength(1)
  })

  it('should accept extra classes', () => {
    const wrapper = shallow(<Col className="holabb" />)

    const colProps = wrapper.props()

    expect(colProps.className).toMatch(/holabb/)
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Col onClick={onClick} someRandomProp="HELLO" />)

    const colProps = wrapper.props()

    wrapper.simulate('click')

    expect(colProps).toHaveProperty('onClick')
    expect(colProps).toHaveProperty('someRandomProp', 'HELLO')
    expect(onClick).toBeCalled()
  })
})
