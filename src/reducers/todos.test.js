import reducer, { INITIAL_STATE } from './todos';
import {
  GET_TODOS,
  UPDATE_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  CREATE_TODO,
  UPDATE_SORT
} from '../constants';

const todos = [{
  id: 92916525,
  title: 'veniam id minim anim',
  completed: true
},
{
  id: 46769446,
  title: 'velit ullamco amet enim',
  completed: false
}];

describe('Todo reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    expect(reducer(undefined, { type: 'test' })).toEqual(INITIAL_STATE);
  });

  it('handles UPDATE_SORT', () => {
    expect(reducer(INITIAL_STATE, {
      type: UPDATE_SORT,
      payload: { sort: 'active' }
    })).toEqual({
      list: [],
      sort: 'active',
      isFetching: false
    });
  });

  it('handles GET_TODOS', () => {
    expect(reducer(INITIAL_STATE, {
      type: GET_TODOS
    })).toEqual({
      list: [],
      sort: null,
      isFetching: true
    });
  });

  it('handles UPDATE_TODOS', () => {
    expect(reducer(INITIAL_STATE, {
      type: UPDATE_TODOS,
      payload: { todos }
    })).toEqual({
      list: todos,
      sort: null,
      isFetching: false
    });
  });

  it('handles CREATE_TODO', () => {
    expect(reducer(INITIAL_STATE, {
      type: CREATE_TODO,
      payload: { todo: todos[0] }
    })).toEqual({
      ...INITIAL_STATE,
      list: [todos[0]]
    });
  });

  it('handles DELETE_TODO', () => {
    const LOADED_STATE = {
      ...INITIAL_STATE,
      list: todos
    };

    expect(reducer(LOADED_STATE, {
      type: DELETE_TODO,
      payload: { id: 92916525 }
    })).toEqual({
      list: [{
        id: 46769446,
        title: 'velit ullamco amet enim',
        completed: false
      }],
      sort: null,
      isFetching: false
    });
  });

  it('handles EDIT_TODO', () => {
    const LOADED_STATE = {
      ...INITIAL_STATE,
      list: todos
    };

    expect(reducer(LOADED_STATE, {
      type: EDIT_TODO,
      payload: {
        id: 92916525,
        todo: {
          id: 92916525,
          completed: false,
          title: 'Test'
        }
      }
    })).toEqual({
      list: [{
        id: 92916525,
        title: 'Test',
        completed: false
      },
      {
        id: 46769446,
        title: 'velit ullamco amet enim',
        completed: false
      }],
      sort: null,
      isFetching: false
    });
  });
});
