import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import TaskItemsWithLoading, { TaskItems } from './index'

describe('TaskItems', () => {
  it('should render correctly with inactive loading', () => {
    const renderer = new ShallowRenderer()
    const tasks = [
      { id: 1, title: 'A title', description: 'A description' }
    ]
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskItemsWithLoading
        items={tasks}
        loading={false}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should render correctly with active loading', () => {
    const renderer = new ShallowRenderer()
    const tasks = []
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskItemsWithLoading
        items={tasks}
        loading={true}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should call passed updateTask when child updateTask is called', () => {
    const renderer = new ShallowRenderer()
    const tasks = [
      { id: 1, title: 'A title', description: 'A description' }
    ]
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskItems
        items={tasks}
        loading={false}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()
    const taskItem = result.props.children.props.children[0]

    taskItem.props.updateTask('payload')

    expect(updateTask).toBeCalledWith('payload')
  })

  it('should call passed deleteTask when child deleteTask is called', () => {
    const renderer = new ShallowRenderer()
    const tasks = [
      { id: 1, title: 'A title', description: 'A description' }
    ]
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskItems
        items={tasks}
        loading={false}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()
    const taskItem = result.props.children.props.children[0]

    taskItem.props.deleteTask()

    expect(deleteTask).toBeCalledWith({ id: 1 })
  })
})
