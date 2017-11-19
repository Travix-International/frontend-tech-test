const isFetching = (state = true, action) => {
  switch(action.type) {
    case 'IS_FETCHING':
      return action.payload
    default:
      return state
  }
}

export default isFetching
