import React from 'react'
import { mock } from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import List from '../List'

import Task from './Task'
import TaskForm from './TaskForm'

describe('List Component', () => {
  describe('Renders', () => {
    let component
    let props = {
      tasks: [{id: 1, title:2, description:3}],
      createTask: () => {},
      deleteTask: () => {},
      editTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<List {...props} />)
    })

    it('Rendered', () => {
      expect(component.find('.list__container')).to.be.present()
      expect(component.find('.list__container')).to.have.descendants(Task)
      expect(component.find('.list__container')).to.have.descendants(TaskForm)

      expect(component.find(Task)).to.have.prop('task', props.tasks[0])
      expect(component.find(Task)).to.have.prop('deleteTask', props.deleteTask)
      expect(component.find(Task)).to.have.prop('editTask', props.editTask)
      expect(component.find(TaskForm)).to.have.prop('createTask', props.createTask)
    })
  })
})
