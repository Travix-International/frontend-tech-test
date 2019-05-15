import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import ToDoApp from './ToDoApp';
import ToDoHeader from '../../components/ToDoHeader/ToDoHeader';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';

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

  describe('Other Components', () => {
    it('should render', () => {
      const output = setup()
      const [ , div ] = output.props.children
      expect(div.props.className).toBe('toDoApp')
      expect(div.props.children).toEqual([
        <AddToDo placeholder="I want to..." />,
        <ToDoList />
      ]);
    })
  })
})