import React from 'react'
import renderer from 'react-test-renderer'

import Main from '.'

describe('MainComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Main><p>test</p></Main>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
