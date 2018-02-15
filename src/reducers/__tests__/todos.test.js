import reducer, { INITIAL_STATE } from './../todos';
import * as types from './../../constants';

const todos = [{
  id: 0,
  title: 'lorem impsu',
  description: 'lorem impsu'
},
{
  id: 1,
  title: 'lorem impsu 1',
  description: 'lorem impsu 1'
}]

describe('todos reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle GET_TODOS', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.GET_TODOS
    })).toEqual({
      todos: [],
      todo: {},
      isFetching: true
    });
  });

  it('should handle UPDATE_TODOS', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.UPDATE_TODOS,
      payload: { todos }
    })).toEqual({
      todos: todos,
      todo: {},
      isFetching: false
    });
  });

  it('should handle GET_TODO', () => {
    const todo = todos[0];
    expect(reducer(INITIAL_STATE, {
      type: types.GET_TODO,
      payload: { todo }
    })).toEqual({
      todos: [],
      todo: todo,
      isFetching: true
    });
  });

  it('should handle CREATE_TODO', () => {
    const todo = todos[0];
    expect(reducer(INITIAL_STATE, {
      type: types.CREATE_TODO,
      payload: { todo }
    })).toEqual({
      todos: [todo],
      todo: {},
      isFetching: false
    });
  });

  it('should handle EDIT_TODO', () => {
    const LOADED_STATE = {
      ...INITIAL_STATE,
      todos: todos
    };

    expect(reducer(LOADED_STATE, {
      type: types.EDIT_TODO,
      payload: {
        id: 0,
        todo: {
          id: 0,
          title: 'Test 1',
          description: 'Test'
        }
      }
    })).toEqual({
      todos: [{
        id: 0,
        title: 'Test 1',
        description: 'Test'
      },
      {
        id: 1,
        title: 'lorem impsu 1',
        description: 'lorem impsu 1'
      }],
      todo: {},
      isFetching: false
    });
  });

  it('should handle DELETE_TODO', () => {
    const LOADED_STATE = {
      ...INITIAL_STATE,
      todos: todos
    };

    expect(reducer(LOADED_STATE, {
      type: types.DELETE_TODO,
      payload: { id: 0 }
    })).toEqual({
      todos: [{
        id: 1,
        title: 'lorem impsu 1',
        description: 'lorem impsu 1'
      }],
      todo: {},
      isFetching: false
    });
  });
})