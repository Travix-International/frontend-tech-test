import {
  GET_TODOS,
  UPDATE_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  CREATE_TODO,
  UPDATE_SORT
} from '../constants';

import {
  getTodos,
  updateTodos,
  createTodo,
  editTodo,
  deleteTodo,
  updateSort
} from './todos';

const todo = {
  id: 92916525,
  title: 'veniam id minim anim',
  completed: true
};

// Don't know how to test async actions with Frint framework
// Ref: https://github.com/Travix-International/frint/tree/master/packages/frint-store#async-actions
// Ref: https://github.com/Travix-International/frint/tree/master/examples

describe('Todo reducer', () => {
  test('getTodos', () => {
    expect(getTodos()).toEqual({
      type: GET_TODOS
    });
  });

  test('updateTodos', () => {
    expect(updateTodos([todo])).toEqual({
      type: UPDATE_TODOS,
      payload: { todos: [todo] }
    });
  });

  test('createTodo', () => {
    expect(createTodo(todo)).toEqual({
      type: CREATE_TODO,
      payload: { todo }
    });
  });

  test('editTodo', () => {
    expect(editTodo(todo, todo.id)).toEqual({
      type: EDIT_TODO,
      payload: { todo, id: todo.id }
    });
  });

  test('deleteTodo', () => {
    expect(deleteTodo(todo.id)).toEqual({
      type: DELETE_TODO,
      payload: { id: todo.id }
    });
  });

  test('updateSort', () => {
    expect(updateSort('completed')).toEqual({
      type: UPDATE_SORT,
      payload: { sort: 'completed' }
    });
  });
});
