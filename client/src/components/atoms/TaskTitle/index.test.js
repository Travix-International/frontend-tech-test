import React from 'react'
import renderer from 'react-test-renderer'
import TaskTitle from './index'

describe('TaskTitle', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <TaskTitle>Something...</TaskTitle>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
