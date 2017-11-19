import * as apiPaths from '../constants/apiPaths'
import setTasks from './setTasks'
import setError from './setError'
import isFetching from './isFetching'

const createTask = ({ title, description }) => {
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  return (dispatch) => {
    const url = `${apiPaths.CREATE}/${encodedTitle}/${encodedDescription}`
    dispatch(isFetching(true))

    fetch(url, { method: 'POST'})
      .then((response) => {
        if (!response.ok) {
          dispatch(setError('There was a problem with the syncronization.'))
        }

        dispatch(isFetching(false));
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(setTasks(response.state)))
      .catch(() =>dispatch(setError('There was a problem with the syncronization.')));
  };
}

export default createTask
