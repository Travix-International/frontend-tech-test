import React from 'react'
import renderer from 'react-test-renderer'

import Grid from '.'

describe('GridComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Grid><li>torto</li></Grid>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
