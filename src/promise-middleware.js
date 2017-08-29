export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action

    if (!promise) {
      return next(action)
    }

    
    const [REQUEST, SUCCESS, FAILURE] = types

    next({...rest, type: REQUEST})

    return promise().then(
      (payload) => {
        next({...rest, payload, type: SUCCESS})
      },
      (error) => {
        next({...rest, error, type: FAILURE})
      }
    )
  }
}
