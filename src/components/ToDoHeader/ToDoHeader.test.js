import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ToDoHeader from './ToDoHeader'

const setup = () => {
  const props = {
    title: jest.fn()
  }

  const renderer = createRenderer();
  renderer.render(<ToDoHeader {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('ToDoHeader', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.type).toBe('h1')
      expect(output.props.className).toBe('appTitle')
    })
  })
})
