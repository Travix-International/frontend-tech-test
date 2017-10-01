import React from 'react'
import renderer from 'react-test-renderer'
import TaskDescriptionInput from './index'

describe('TaskDescriptionInput', () => {
  it('should render correctly', () => {
    const handleChange = jest.fn()
    const handleSubmit = jest.fn()
    const tree = renderer.create(
      <TaskDescriptionInput
        value='A description'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
