import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { ToDoListItem } from './ToDoListItem';

const setup = ( editing = false ) => {
    const props = {
        toDo: {
          id: 0,
          title: 'Use Redux',
          completed: false
        },
        deleteToDo: jest.fn(),
        toggleToDo: jest.fn()
      }
    
      const renderer = createRenderer()
    
      renderer.render(
        <ToDoListItem {...props} />
      )
    
      let output = renderer.getRenderOutput()
    
      if (editing) {
        const label = output.props.children[1]
        label.props.onDoubleClick({})
        output = renderer.getRenderOutput()
      }
    
      return {
        props: props,
        output: output,
        renderer: renderer
      }
  }
  
  describe('components', () => {
    it('initial render', () => {
        
        const { output } = setup();
    
        expect(output.type).toBe('li')
        expect(output.props.className).toBe('toDo ')
    
        const [ input, div, button ] = output.props.children.props.children
    
        expect(input.type).toBe('input');
        expect(input.props.checked).toBe(false);
    
        expect(div.type).toBe('div');
        expect(div.props.children).toBe('Use Redux');
    
        expect(button.type).toBe('button');
        expect(button.props.className).toBe('delete');
    })

    it('input onChange should call toggleToDo', () => {
        const { output, props } = setup()
        const input = output.props.children.props.children[0]
        input.props.onChange({})
        expect(props.toggleToDo).toBeCalledWith({});
    })

    it('button onClick should call deleteToDo', () => {
        const { output, props } = setup()
        const button = output.props.children.props.children[2]
        button.props.onClick({})
        expect(props.deleteToDo).toBeCalledWith({});
    })

    it('div onDoubleClick should put component in edit state', () => {
        const { output, renderer } = setup()
        const div = output.props.children.props.children[1]
        div.props.onDoubleClick({})
        const updated = renderer.getRenderOutput()
        expect(updated.type).toBe('li')
    })
  })