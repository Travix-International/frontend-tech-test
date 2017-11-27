import React from 'react'
import { mock } from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Task from 'application/entities/Task'
import List from '../List'

import Todos from './Todos'

describe('Todos Component', () => {
  describe('Renders', () => {
    let component
    let props = {
      tasks: [],
      getTasks: mock(),
      createTask: () => {},
      deleteTask: () => {},
      editTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<Todos {...props} />)
    })

    it('Rendered', () => {
      props.getTasks.verify()
      expect(component.find('.todos__container')).to.be.present()
      expect(component.find('.todos__title')).to.be.present()
      expect(component.find('.todos__container')).to.have.descendants(List)
      expect(component.find(List)).to.have.prop('createTask', props.createTask)
      expect(component.find(List)).to.have.prop('deleteTask', props.deleteTask)
      expect(component.find(List)).to.have.prop('editTask', props.editTask)
      expect(component.find(List)).to.have.prop('tasks', props.tasks)
    })
  })
})
