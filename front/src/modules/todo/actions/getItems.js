import axios from 'axios'
import {
  REQ_ITEMS_SUCCESS,
  REQ_ITEMS_ERROR,
  REQ_ITEMS_LOADING
} from '../reducers/items'

const dependencies = {
  axios
}

export const getItems = (injection) => async dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)
  const URL = 'http://localhost:9001/tasks'
  dispatch({
    type: REQ_ITEMS_LOADING,
    payload: {}
  })
  try {
    const { data: { tasks } } = await axios.get(URL)
    return dispatch({
      type: REQ_ITEMS_SUCCESS,
      payload: {
        data: tasks
      }
    })

  } catch(error) {
    return dispatch({
      type: REQ_ITEMS_ERROR,
      payload: {
        data: error.message
      }
    })
  }
}
