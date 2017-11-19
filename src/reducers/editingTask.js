const editingTask = (state = -1, action) => {
  switch(action.type) {
    case 'EDIT_TASK':
      return action.payload
    default:
      return state
  }
}

export default editingTask
