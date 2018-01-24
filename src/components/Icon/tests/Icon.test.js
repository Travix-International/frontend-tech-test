import React from 'react'
import { shallow } from 'enzyme'

import Icon, { IconSizes } from '../index'
import SVGIcons from '../icons'

describe('<Icon />', () => {
  it('should render an icon with default props', () => {
    const name = 'ALERT'
    const wrapper = shallow(<Icon name={name} />)

    const svg = wrapper.find('svg')
    const svgProps = svg.props()
    const path = wrapper.find('path')
    const pathProps = path.props()

    expect(svg).toHaveLength(1)
    expect(svgProps).toHaveProperty('width', 16)
    expect(svgProps).toHaveProperty('height', 16)
    expect(svgProps).toHaveProperty('className', 'icon')
    expect(path).toHaveLength(1)
    expect(pathProps).toHaveProperty('d', SVGIcons[`${name}`])
  })

  it('should accept a color to paint the icon', () => {
    const name = 'ALERT'
    const size = IconSizes.SMALL
    const color = 'blue'
    const wrapper = shallow(<Icon name={name} size={size} color={color} />)

    const svg = wrapper.find('svg')
    const svgProps = svg.props()

    expect(svgProps).toHaveProperty('height', size)
    expect(svgProps).toHaveProperty('width', size)
    expect(svgProps).toHaveProperty('fill', color)
  })

  it('should render a mini icon', () => {
    const name = 'ALERT'
    const size = IconSizes.MINI
    const wrapper = shallow(<Icon name={name} size={size} />)

    const svg = wrapper.find('svg')
    const svgProps = svg.props()

    expect(svgProps).toHaveProperty('height', size)
    expect(svgProps).toHaveProperty('width', size)
  })

  it('should render a small icon', () => {
    const name = 'ALERT'
    const size = IconSizes.SMALL
    const wrapper = shallow(<Icon name={name} size={size} />)

    const svg = wrapper.find('svg')
    const svgProps = svg.props()

    expect(svgProps).toHaveProperty('height', size)
    expect(svgProps).toHaveProperty('width', size)
  })

  it('should render a medium icon', () => {
    const name = 'ALERT'
    const size = IconSizes.MEDIUM
    const wrapper = shallow(<Icon name={name} size={size} />)

    const svg = wrapper.find('svg')
    const svgProps = svg.props()

    expect(svgProps).toHaveProperty('height', size)
    expect(svgProps).toHaveProperty('width', size)
  })

  it('should accept extra props and execute callbacks as normal', () => {
    const name = 'ALERT'
    const onClick = jest.fn()
    const wrapper = shallow(<Icon onClick={onClick} someRandomProp="HELLO" name={name} />)

    const svg = wrapper.find('svg')
    const svgProps = svg.props()

    wrapper.simulate('click')

    expect(svgProps).toHaveProperty('onClick')
    expect(svgProps).toHaveProperty('someRandomProp', 'HELLO')
    expect(onClick).toBeCalled()
  })
})
