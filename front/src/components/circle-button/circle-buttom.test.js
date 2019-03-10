import React from 'react'
import renderer from 'react-test-renderer'

import CircleButton from '.'

describe('CircleButtonComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<CircleButton />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
