import React from 'react'
import renderer from 'react-test-renderer'

import Container from '.'

describe('ContainerComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Container><p>test</p></Container>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
