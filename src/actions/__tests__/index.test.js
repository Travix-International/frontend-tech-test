import React from 'react';
import * as actions from './../index';
import * as types from './../../constants';

const task = {
  id: 0,
  title: 'Test',
  description: 'Test Description',
};

describe('actions', () => {
  it('should create an action to get todos', () => {
    const expectedAction = {
      type: types.GET_TODOS,
    }
    expect(actions.getTodos()).toEqual(expectedAction)
  })

  it('should create an action to update todos', () => {
    const todos = [task];
    const expectedAction = {
      type: types.UPDATE_TODOS,
      payload: { todos }
    }
    expect(actions.updateTodos(todos)).toEqual(expectedAction)
  })

  it('should create an action to getTodo', () => {
    const todo = task;
    const expectedAction = {
      type: types.GET_TODO,
      payload: { todo }
    }
    expect(actions.getTodo(todo)).toEqual(expectedAction)
  })

  it('should create an action to create todo', () => {
    const todo = {
      id: 1,
      title: 'new todo',
      description: 'new todo description',
    };
    const expectedAction = {
      type: types.CREATE_TODO,
      payload: { todo }
    }
    expect(actions.createTodo(todo)).toEqual(expectedAction)
  })

  it('should create an action to edit todo', () => {
    const todo = {
      id: 1,
      title: 'edit todo',
      description: 'edit todo description',
    };
    const expectedAction = {
      type: types.EDIT_TODO,
      payload: { todo }
    }
    expect(actions.editTodo(todo)).toEqual(expectedAction)
  })

  it('should create an action to remove todo', () => {
    const id = 0;
    const expectedAction = {
      type: types.DELETE_TODO,
      payload: { id }
    }
    expect(actions.removeTodo(id)).toEqual(expectedAction)
  })
})