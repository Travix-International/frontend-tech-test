import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Title from '.'

describe('TitleComponent', () => {
  it('Snapshot', async () => {
    const tree = shallow(<Title>test</Title>)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
