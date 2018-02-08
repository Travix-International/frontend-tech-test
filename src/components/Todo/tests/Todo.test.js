/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../Todo';
import UpdateTodo from '../../../containers/UpdateTodo/UpdateTodo';

import mock from '../../../mocks/tasks';

const todo = mock.tasks[0];

const todoWrapper = shallow(
  <Todo
    completed={todo.completed}
    description={todo.description}
    editing
    id={todo.id}
    key={todo.id}
    onClick={() => { }}
    title={todo.title}
  />
);

it('Todo will display UpdateTodo form when editing prop is true', () => {
  expect(todoWrapper.containsMatchingElement(<UpdateTodo />)).toEqual(true);
});

it('Todo will display title of object passed in props', () => {
  expect(todoWrapper.find('.todoTitle').text()).toEqual(todo.title);
});

it('Todo will display description of object passed in props', () => {
  expect(todoWrapper.find('.todoDescription').text()).toEqual(todo.description);
});
