import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { AddToDo } from './AddToDo';

const setup = propOverrides => {
  const props = Object.assign({
    onChange: jest.fn(),
    placeholder: 'I want to...',
    value: 'Use Redux'
  }, propOverrides)

  const renderer = createRenderer()

  renderer.render(
    <AddToDo {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('AddToDo', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('form');
      expect(output.props.className).toBe('toDoForm');

      const [ input, button ] = output.props.children;
      expect(input.type).toBe('input');
      expect(input.props.placeholder).toBe('I want to...');
      expect(input.props.className).toBe('toDoInput');
      expect(button.props.children).toBe('Add ToDo');
      expect(button.props.className).toBe('addToDo');
    })

    it('should update value on change', () => {
      const { output, renderer } = setup();
      const [ input ] = output.props.children;
      input.props.onChange({ target: { value: 'Use Redux' } });
      const updated = renderer.getRenderOutput();
      const [ updatedInput ] = updated.props.children
      expect(updatedInput.props.value).toEqual('Use Redux');
    })
  })
})
