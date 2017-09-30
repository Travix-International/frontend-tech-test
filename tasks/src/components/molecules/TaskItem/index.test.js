import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import TaskItem from './index'

describe('TaskItem', () => {
  it('should render a task item', () => {
    const renderer = new ShallowRenderer()
    const task = {
      id: 1,
      title: 'A title',
      description: 'A description'
    }
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskItem
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

  describe('when edition mode is enabled', () => {
    it('should render a task form', () => {
      const renderer = new ShallowRenderer()
      const task = {
        id: 1,
        title: 'A title',
        description: 'A description'
      }
      const updateTask = jest.fn()
      const deleteTask = jest.fn()

      renderer.render(
        <TaskItem
          id={task.id}
          title={task.title}
          description={task.description}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )
      renderer._instance.enableEditionMode()
      const result = renderer.getRenderOutput()

      expect(result).toMatchSnapshot()
    })
  })

  describe('when edition mode is disabled', () => {
    it('should render a task content', () => {
      const renderer = new ShallowRenderer()
      const task = {
        id: 1,
        title: 'A title',
        description: 'A description'
      }
      const updateTask = jest.fn()
      const deleteTask = jest.fn()

      renderer.render(
        <TaskItem
          id={task.id}
          title={task.title}
          description={task.description}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )
      renderer._instance.disableEditionMode()
      const result = renderer.getRenderOutput()

      expect(result).toMatchSnapshot()
    })
  })

  describe('when update is called', () => {
    it('should disable edition mode and render the task content', () => {
      const renderer = new ShallowRenderer()
      const payload = {
        id: 1,
        title: 'An updated title',
        description: 'A updated description'
      }
      const task = {
        id: 1,
        title: 'A title',
        description: 'A description'
      }
      const updateTask = jest.fn()
      const deleteTask = jest.fn()

      renderer.render(
        <TaskItem
          id={task.id}
          title={task.title}
          description={task.description}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )
      renderer._instance.updateTask(payload)
      const result = renderer.getRenderOutput()

      expect(updateTask).toBeCalledWith(payload)
      expect(result).toMatchSnapshot()
    })
  })
})
