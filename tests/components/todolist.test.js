import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '../../src/components/todolist/todolist.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('TodoList Component', () => {
  it('Render', () => {
    const wrapper = shallow(<TodoList todos={ [] } />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Filter by tags', () => {
    const propsMock = {
      todos: [
        {
          id: 1,
          tags: ['test']
        },
        {
          id: 2,
          tags: ['another']
        }
      ],
      tags: ['test']
    };
    const wrapper = shallow(<TodoList { ...propsMock } />);
    const instance = wrapper.instance();

    const expected = propsMock.todos.filter(todo => (
      todo.tags.findIndex(todoTag => todoTag === propsMock.tags[0]) + 1
    ));

    expect(instance.todoFilter()).toEqual(expected);
  });
});