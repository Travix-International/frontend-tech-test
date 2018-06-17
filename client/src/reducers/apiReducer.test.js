import reducer from './apiReducer';
import * as types from '../actions/types';
import * as actions from '../actions/apiActions';

const initialState = {
  todos: {tasks: []},
  todo: {},
  deletedTodo: {},
  updatedTodo: {},
  isEditing: false
}

const payload = {
  tasks: [{
    id: 1,
    title: 'test',
    description: 'dscr'
  }]
}

describe('Testing api reducer', () => {

  it('Returning initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH request', () => {
    expect(
      reducer([], {
        type: types.FETCH_TODOS,
        payload: payload
      })
    ).toEqual({
      todos: payload
    })
  })

  it('should handle NEW TODO request', () => {
    expect(
      reducer([], {
        type: types.NEW_TODO,
        payload: payload
      })
    ).toEqual({
      todo: payload,
    })
  })

  it('should handle DELETE request', () => {
    expect(
      reducer([], {
        type: types.DELETE_TODO,
        payload: payload
      })
    ).toEqual({
      deletedTodo: payload,
    })
  })

})
