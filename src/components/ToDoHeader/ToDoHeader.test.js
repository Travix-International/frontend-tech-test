import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ToDoHeader from './ToDoHeader'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<ToDoHeader />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('ToDoHeader', () => {
    it('should render correctly', () => {
      const output = setup()
      expect(output.type).toBe('h1')
      expect(output.props.className).toBe('appTitle')
    })
  })
})
