import React from 'react'
import { shallow } from 'enzyme'

import MainNav from 'components/MainNav'

describe('<MainNav />', () => {
  it('should render a navigation element', () => {
    const wrapper = shallow(<MainNav />)

    expect(wrapper.find('Row[tagName="ul"]')).toHaveLength(1)
    expect(wrapper.find('Col[tagName="li"]')).toHaveLength(3)
    expect(wrapper.find('Link')).toHaveLength(2)
  })

  it('should render a <strong> tag for the current filter', () => {
    const wrapper = shallow(<MainNav filter="active" />)
    const wrapper2 = shallow(<MainNav filter="done" />)

    expect(wrapper.find('Link')).toHaveLength(2)
    expect(wrapper.find('strong')).toHaveLength(1)
    expect(wrapper2.find('Link')).toHaveLength(2)
    expect(wrapper2.find('strong')).toHaveLength(1)
  })
})
