export default (defaultState, actionsResolver) => {
  return (state = defaultState, action) => {
    const resolver = actionsResolver.find((actionResolver) => actionResolver.match(action))

    if (resolver) {
      return resolver.execute(state, action)
    }

    return state
  }
}
