import React from 'react'
import { shallow } from 'enzyme'

import { Row } from 'components/Grid'

describe('<Row />', () => {
  it('should render with default props', () => {
    const content = 'hola bb'
    const wrapper = shallow(<Row>{content}</Row>)

    const rowProps = wrapper.props()

    expect(rowProps).toHaveProperty('children', content)
    expect(rowProps.className).toMatch(/row/)
  })

  it('should be able to set `around` prop', () => {
    const wrapper = shallow(<Row around="xs" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/around-xs/)
  })

  it('should be able to set `between` prop', () => {
    const wrapper = shallow(<Row between="md" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/between-md/)
  })

  it('should be able to set `bottom` prop', () => {
    const wrapper = shallow(<Row bottom="lg" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/bottom-lg/)
  })

  it('should be able to set `center` prop', () => {
    const wrapper = shallow(<Row center="sm" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/center-sm/)
  })

  it('should be able to set `end` prop', () => {
    const wrapper = shallow(<Row end="xs" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/end-xs/)
  })

  it('should be able to set `isReverse` prop', () => {
    const wrapper = shallow(<Row isReverse />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/reverse/)
  })

  it('should be able to set `middle` prop', () => {
    const wrapper = shallow(<Row middle="lg" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/middle-lg/)
  })

  it('should be able to set `start` prop', () => {
    const wrapper = shallow(<Row start="sm" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/start-sm/)
  })

  it('should be able to set `top` prop', () => {
    const wrapper = shallow(<Row top="xl" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/top-xl/)
  })

  it('should be able to specify the element\'s tagName', () => {
    const wrapper = shallow(<Row tagName="section" />)

    const section = wrapper.find('section')

    expect(section).toHaveLength(1)
  })

  it('should accept extra classes', () => {
    const wrapper = shallow(<Row className="holabb" />)

    const rowProps = wrapper.props()

    expect(rowProps.className).toMatch(/holabb/)
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Row onClick={onClick} someRandomProp="HELLO" />)

    const rowProps = wrapper.props()

    wrapper.simulate('click')

    expect(rowProps).toHaveProperty('onClick')
    expect(rowProps).toHaveProperty('someRandomProp', 'HELLO')
    expect(onClick).toBeCalled()
  })
})
