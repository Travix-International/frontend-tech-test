import React from 'react'
import renderer from 'react-test-renderer'
import TaskDeleteButton from './index'

describe('TaskDeleteButton', () => {
  it('should render correctly', () => {
    const onClick = jest.fn()
    const tree = renderer.create(
      <TaskDeleteButton onClick={onClick} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
