import * as apiPaths from '../constants/apiPaths'
import setTasks from './setTasks'
import setError from './setError'
import isFetching from './isFetching'

const fetchTasks = () => {
  return (dispatch) => {
    dispatch(isFetching(true))

    fetch(apiPaths.TASKS)
      .then((response) => {
        if (!response.ok) {
          dispatch(setError('There was a problem with the syncronization.'))
        }

        dispatch(isFetching(false));
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(setTasks(response)))
      .catch(() =>dispatch(setError('There was a problem with the syncronization.')));
  };
}

export default fetchTasks
