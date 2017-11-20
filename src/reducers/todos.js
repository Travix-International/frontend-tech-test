const setTodos = (state=[], action) => {
  if(action.error) return state

  switch(action.type) {
    case 'SET_TASKS':
      return action.payload
    default:
      return state
  }
}

export default setTodos
