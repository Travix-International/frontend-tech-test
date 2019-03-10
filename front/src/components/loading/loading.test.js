import React from 'react'
import { shallow } from 'enzyme'

import Loading from '.'

describe('LoadingComponent', () => {
  it('Snapshot', async () => {
    const tree = shallow(<Loading isOpen={true} />)

    expect(tree).toMatchSnapshot()
  })
  it('Snapshot without nothing', async () => {
    const tree = shallow(<Loading isOpen={false} />)

    expect(tree).toMatchSnapshot()
  })
})
