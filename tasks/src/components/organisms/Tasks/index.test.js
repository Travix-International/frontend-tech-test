import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Tasks from './index'

describe('Tasks', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
      <Tasks />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
