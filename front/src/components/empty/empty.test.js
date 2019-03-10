import React from 'react'
import renderer from 'react-test-renderer'

import Empty from '.'

describe('EmptyComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Empty />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
