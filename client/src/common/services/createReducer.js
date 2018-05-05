export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    const handler = handlers[action.type]
    if (handler) {
      return handler(state, action)
    } else {
      return state
    }
  }
}
