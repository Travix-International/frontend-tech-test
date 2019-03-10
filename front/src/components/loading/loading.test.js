jest.mock('react-dom')

import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import Loading from '.'

describe('LoadingComponent', () => {
  it('Snapshot', async () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Loading open={true} />)
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
