import React from 'react'
import renderer from 'react-test-renderer'
import TaskSubmitButton from './index'

describe('TaskSubmitButton', () => {
  it('should render correctly', () => {
    const onClick = jest.fn()
    const tree = renderer.create(
      <TaskSubmitButton onClick={onClick} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
