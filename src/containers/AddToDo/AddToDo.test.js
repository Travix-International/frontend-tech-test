import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import AddToDo from './AddToDo';

const setup = () => {
    const renderer = createRenderer()
    renderer.render(<AddToDo />)
    const output = renderer.getRenderOutput()
    return output
}

describe('components', () => {
  describe('AddToDo', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.type).toBe('form')
      expect(output.props.className).toBe('toDoForm')

      const [ input, button ] = output.props.children
      expect(input.type).toBe('input')
      expect(input.props.placeholder).toBe('I want to...')
    })
  })
})
