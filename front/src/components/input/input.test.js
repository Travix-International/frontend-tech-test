import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import LoadComponent from '.'

describe('LoadComponent', () => {
  it('execute with values load', async () => {
    const wrapper = shallow(<LoadComponent />)
    expect(wrapper.find('Square')).to.have.lengthOf(3)
  })
})
