const isFetching = (payload) => {
  return {
    type: 'IS_FETCHING',
    payload
  }
}

export default isFetching
