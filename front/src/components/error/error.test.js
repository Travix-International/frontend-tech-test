jest.mock('react-dom')

import React from 'react'
import render from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

import Error from '.'

describe('ErrorComponent', () => {
  it('Snapshot', async () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Error isOpen={true} message={'test'} />)
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
