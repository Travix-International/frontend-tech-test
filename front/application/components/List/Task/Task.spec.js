import React from 'react'
import { mock } from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TaskForm from '../TaskForm'

import Task from './Task'

describe('Task Component', () => {
  describe('Renders dont editing', () => {
    let component
    let props = {
      task: { id: 1, title: '2', description: '3' },
      deleteTask: () => {},
      editTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<Task {...props} />)
    })

    it('Rendered', () => {
      expect(component.find('.task__item')).to.be.present()
      expect(component.find('.task__remove')).to.be.present()
      expect(component.find('.task__edit')).to.be.present()
      expect(component.find('.task__title')).to.be.present()
      expect(component.find('.task__description')).to.be.present()

      expect(component).to.have.state('editing', false)
    })
  })

  describe('Renders editing', () => {
    let component
    let props = {
      task: { id: 1, title: '2', description: '3' },
      deleteTask: () => {},
      editTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<Task {...props} />)
      component.find('.task__edit').simulate('click')
    })

    it('Rendered', () => {
      expect(component.find(TaskForm)).to.be.present()
      expect(component.find(TaskForm)).to.have.prop('title', '2')
      expect(component.find(TaskForm)).to.have.prop('description', '3')
    })
  })

  describe('Renders and delete task', () => {
    let component
    let task = { id: 1, title: '2', description: '3' }
    let props = {
      task,
      deleteTask: mock().withArgs(task),
      editTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<Task {...props} />)
      component.instance().deleteTask()
    })

    it('Rendered', () => {
      props.deleteTask.verify()
    })
  })

  describe('Renders and edit task', () => {
    let component
    let task = { id: 1, title: '2', description: '3' }
    let props = {
      task,
      editTask: mock().withArgs(task.id, task.title, task.description),
      deleteTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<Task {...props} />)
      component.find('.task__edit').simulate('click')
      component.instance().editTask(task.title, task.description)
    })

    it('Rendered', () => {
      props.editTask.verify()
      expect(component).to.have.state('editing', false)
    })
  })
})
