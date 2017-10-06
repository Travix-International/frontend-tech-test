import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import TaskForm from './index'

describe('TaskForm', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer()
    const task = {
      id: 1,
      title: 'A title',
      description: 'A description'
    }
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskForm
        id={task.id}
        title={task.title}
        description={task.description}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should update title', () => {
    const renderer = new ShallowRenderer()
    const task = {
      id: 1,
      title: 'A title',
      description: 'A description'
    }
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskForm
        id={task.id}
        title={task.title}
        description={task.description}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )

    renderer._instance.handleTitleChange({
      target: { value: 'Updated title' }
    })
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should update description', () => {
    const renderer = new ShallowRenderer()
    const task = {
      id: 1,
      title: 'A title',
      description: 'A description'
    }
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskForm
        id={task.id}
        title={task.title}
        description={task.description}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )

    renderer._instance.handleDescriptionChange({
      target: { value: 'Updated description' }
    })
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should call the passed updateTask with current task state', () => {
    const renderer = new ShallowRenderer()
    const task = {
      id: 1,
      title: 'A title',
      description: 'A description'
    }
    const payload = {
      id: 1,
      title: 'Updated title',
      description: 'Updated description'
    }
    const updateTask = jest.fn()
    const deleteTask = jest.fn()
    renderer.render(
      <TaskForm
        id={task.id}
        title={task.title}
        description={task.description}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )

    renderer._instance.handleDescriptionChange({
      target: { value: 'Updated description' }
    })
    renderer._instance.handleTitleChange({
      target: { value: 'Updated title' }
    })
    renderer._instance.updateTask()

    expect(updateTask).toBeCalledWith(payload)
  })
})
