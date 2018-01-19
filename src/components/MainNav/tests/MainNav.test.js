import React from 'react'
import { shallow } from 'enzyme'

import MainNav from 'components/MainNav'

describe('<MainNav />', () => {
  it('should render a navigation element', () => {
    const wrapper = shallow(<MainNav />)

    expect(wrapper.find('ul')).toHaveLength(1)
    expect(wrapper.find('li')).toHaveLength(3)
    expect(wrapper.find('Link')).toHaveLength(3)
  })
})
