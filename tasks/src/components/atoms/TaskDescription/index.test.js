import React from 'react'
import renderer from 'react-test-renderer'
import TaskDescription from './index'

describe('TaskDescription', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <TaskDescription>Something...</TaskDescription>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
