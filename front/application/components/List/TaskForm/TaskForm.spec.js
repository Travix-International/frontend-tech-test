import React from 'react'
import { mock } from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TaskForm from './TaskForm'

describe('TaskForm Component', () => {
  describe('Renders without description and title', () => {
    let component
    let props = {
      createTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<TaskForm {...props} />)
    })

    it('Rendered', () => {
      expect(component.find('.task__container')).to.be.present()
      expect(component.find('.task__form')).to.be.present()
      expect(component.find('.task__field')).to.be.present()

      expect(component).to.have.state('step', 1)
      expect(component).to.have.state('title', '')
      expect(component).to.have.state('description', '')
    })
  })

  describe('Renders with description and title', () => {
    let component
    let props = {
      title: '1',
      description: '2',
      createTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<TaskForm {...props} />)
    })

    it('Rendered', () => {
      expect(component).to.have.state('title', '1')
      expect(component).to.have.state('description', '2')
    })
  })

  describe('Renders and call submit with title filled', () => {
    let component
    let props = {
      title: '1',
      createTask: () => {}
    }

    beforeEach(() => {
      component = shallow(<TaskForm {...props} />)
      component.find('.task__form').simulate('submit', { preventDefault: mock() })
    })

    it('Rendered', () => {
      expect(component).to.have.state('step', 2)
      expect(component).to.have.state('title', '1')
    })
  })

  describe('Renders and call submit with all filled', () => {
    let component
    let props = {
      title: '1',
      description: '2',
      createTask: mock().withArgs('1', '2')
    }

    beforeEach(() => {
      component = shallow(<TaskForm {...props} />)
      component.setState({ 'step' : 2 })
      component.find('.task__form').simulate('submit', { preventDefault: mock() })
    })

    it('Rendered', () => {
      props.createTask.verify()
      expect(component).to.have.state('step', 1)
      expect(component).to.have.state('title', '')
      expect(component).to.have.state('title', '')
    })
  })
})
