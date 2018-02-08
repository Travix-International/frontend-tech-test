/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../TodoList';
import Todo from '../../Todo/';

import mock from '../../../mocks/tasks';

const todoListWrapper = shallow(
  <TodoList
    onTodoClick={() => {}}
    todos={mock.tasks}
  />
);

it('TodoList will display as much elements as there are in passed data', () => {
  expect(todoListWrapper.find('.todoListContainer').children().length).toEqual(mock.tasks.length);
});
