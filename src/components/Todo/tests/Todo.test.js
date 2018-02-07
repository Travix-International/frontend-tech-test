/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../Todo';
import UpdateTodo from '../../../containers/UpdateTodo/UpdateTodo';

const todoWrapper = shallow(
  <Todo
    completed
    description={"Gotta create a Todo app"}
    editing
    id={3}
    key={3}
    onClick={() => { }}
    title={"Create a Todo app"}
  />
);

it('Todo will display UpdateTodo form when editing prop is true', () => {
  expect(todoWrapper.containsMatchingElement(<UpdateTodo />)).toEqual(true);
});
