import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import TaskContent from './index'

describe('TaskContent', () => {
  it('should render a task content', () => {
    const renderer = new ShallowRenderer()
    const task = {
      id: 1,
      title: 'A title',
      description: 'A description'
    }
    const editTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskContent
        id={task.id}
        title={task.title}
        description={task.description}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
