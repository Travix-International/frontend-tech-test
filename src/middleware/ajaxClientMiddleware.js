export default function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const {promise, types, ...rest} = action;

      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;

      try {
        next({...rest, type: REQUEST});

        return promise(client)
          .then(result => next({...rest, result, type: SUCCESS}))
          .catch(error => {
            next({...rest, error, type: FAILURE});
            return error;
          });
      } catch (error) {
        throw new Error('Redux error');
      }
    };
  };
};
