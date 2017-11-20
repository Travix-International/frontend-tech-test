import * as apiPaths from '../constants/apiPaths'
import setTasks from './setTasks'
import setError from './setError'
import isFetching from './isFetching'
import editTask from './editTask'

const updateTask = ({ id, title, description }) => {
  return (dispatch) => {
    const url = `${apiPaths.UPDATE}/${id}/${title}/${description}`
    dispatch(isFetching(true))

    fetch(url, { method: 'PUT'})
      .then((response) => {
        if (!response.ok) {
          dispatch(setError('There was a problem with the syncronization.'))
        }

        dispatch(isFetching(false));
        dispatch(editTask({ payload: -1 }))
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(setTasks(response.state)))
      .catch(() =>dispatch(setError('There was a problem with the syncronization.')));
  };
}

export default updateTask
