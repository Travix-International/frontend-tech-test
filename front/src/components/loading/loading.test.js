import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Loading from '.'

describe('LoadingComponent', () => {
  it('Snapshot', async () => {
    const tree = shallow(<Loading isOpen={true} />)

    expect(toJson(tree)).toMatchSnapshot()
  })
  it('Snapshot without nothing', async () => {
    const tree = shallow(<Loading isOpen={false} />)

    expect(toJson(tree)).toMatchSnapshot()
  })
})
