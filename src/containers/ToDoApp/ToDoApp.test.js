import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import ToDoApp from './ToDoApp'
import ToDoHeader from '../../components/ToDoHeader/ToDoHeader'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<ToDoApp />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('ToDoHeader', () => {
    it('should render', () => {
      const output = setup()
      const [ toDoHeader ] = output.props.children
      expect(toDoHeader.type).toBe(ToDoHeader)
    })
  })
})