import React from 'react'
import renderer from 'react-test-renderer'

import Card from '.'

describe('CardComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Card><p>test</p></Card>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
