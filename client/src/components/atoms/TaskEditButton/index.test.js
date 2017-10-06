import React from 'react'
import renderer from 'react-test-renderer'
import TaskEditButton from './index'

describe('TaskEditButton', () => {
  it('should render correctly', () => {
    const onClick = jest.fn()
    const tree = renderer.create(
      <TaskEditButton onClick={onClick} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
