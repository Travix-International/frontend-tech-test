import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import TaskItem from './index'

import TaskTitle from '../../atoms/TaskTitle/index'
import TaskDescription from '../../atoms/TaskDescription/index'
import TaskDeleteButton from '../../atoms/TaskDeleteButton/index'

describe('TaskItem', () => {
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
      <TaskItem
        id={task.id}
        title={task.title}
        description={task.description}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )
    const result = renderer.getRenderOutput()

    expect(result.type).toEqual('li')
    expect(result.props.children).toEqual([
      <TaskTitle>A title</TaskTitle>,
      <TaskDescription>A description</TaskDescription>,
      <TaskDeleteButton onClick={deleteTask}/>
    ])
  })
})
