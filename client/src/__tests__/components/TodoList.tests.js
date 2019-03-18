import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../components/TodoList';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    todos: [
      {
        id: 1,
        title: 'title',
        description: 'description',
        completed: true,
        editable: true
      }
    ],
    toggleTodo: jest.fn(),
    fetchTodos: jest.fn()
  };

  const wrapper = shallow(<TodoList {...props} />);

  return {
    props,
    wrapper
  };
}

describe('components', () => {
  describe('ToDo', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup();

      expect(wrapper.exists('ul')).toBe(true);

      const todoInputProps = wrapper.find('Todo').props();
      expect(todoInputProps.id).toBe(1);
      expect(todoInputProps.title).toBe('title');
      expect(todoInputProps.description).toBe('description');
    });
  });
});
