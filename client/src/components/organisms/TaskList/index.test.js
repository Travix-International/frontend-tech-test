import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { TaskList } from './index'

describe('TaskList', () => {
  it('should render correctly with inactive loading', () => {
    const renderer = new ShallowRenderer()
    const items = [{
      id: 1,
      title: 'A title',
      description: 'A description'
    }]
    const fetchTasks = jest.fn()
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskList
        items={items}
        loading={false}
        fetchTasks={fetchTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should render correctly with active loading', () => {
    const renderer = new ShallowRenderer()
    const items = []
    const fetchTasks = jest.fn()
    const updateTask = jest.fn()
    const deleteTask = jest.fn()

    renderer.render(
      <TaskList
        items={items}
        loading={true}
        fetchTasks={fetchTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })

  it('should call fetchTasks when component mounts', () => {
    const renderer = new ShallowRenderer()
    const items = [{
      id: 1,
      title: 'A title',
      description: 'A description'
    }]
    const fetchTasks = jest.fn()
    const updateTask = jest.fn()
    const deleteTask = jest.fn()
    renderer.render(
      <TaskList
        items={items}
        loading={false}
        fetchTasks={fetchTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )

    renderer._instance.componentDidMount()

    expect(fetchTasks).toBeCalled()
  })

  it('should call passed update when component updateTask is called', () => {
    const renderer = new ShallowRenderer()
    const items = [{
      id: 1,
      title: 'A title',
      description: 'A description'
    }]
    const fetchTasks = jest.fn()
    const updateTask = jest.fn()
    const deleteTask = jest.fn()
    renderer.render(
      <TaskList
        items={items}
        loading={false}
        fetchTasks={fetchTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )

    renderer._instance.updateTask('payload')

    expect(updateTask).toBeCalledWith('payload')
  })

  it('should call passed delete when component deleteTask is called', () => {
    const renderer = new ShallowRenderer()
    const items = [{
      id: 1,
      title: 'A title',
      description: 'A description'
    }]
    const fetchTasks = jest.fn()
    const updateTask = jest.fn()
    const deleteTask = jest.fn()
    renderer.render(
      <TaskList
        items={items}
        loading={false}
        fetchTasks={fetchTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )

    renderer._instance.deleteTask(1)

    expect(deleteTask).toBeCalledWith(1)
  })
})
