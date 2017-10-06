import React from 'react'
import renderer from 'react-test-renderer'
import TaskSubmitButton from './index'

describe('TaskSubmitButton', () => {
  it('should render correctly', () => {
    const onClick = jest.fn()
    const tree = renderer.create(
      <TaskSubmitButton onClick={onClick} disabled={false} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly (disabled button)', () => {
    const onClick = jest.fn()
    const tree = renderer.create(
      <TaskSubmitButton onClick={onClick} disabled={true} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
