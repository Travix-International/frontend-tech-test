import React from 'react'
import renderer from 'react-test-renderer'
import TaskTitleInput from './index'

describe('TaskTitleInput', () => {
  it('should render correctly', () => {
    const handleChange = jest.fn()
    const handleSubmit = jest.fn()
    const tree = renderer.create(
      <TaskTitleInput
        value='A title'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
