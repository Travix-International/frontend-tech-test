import todoReducer from './todo'

describe('todos reducer', () => {

  it('should return the initial state', () => {

    expect(todoReducer(undefined, {})).toEqual({
        todos: [],
        isFetching: false,
        errorMessage: '',
        editableTodo: null
      }
    )
  })
});