import axios from 'axios'
import {getItems} from './getItems'
import {
  REQ_ITEMS_ERROR,
  REQ_ITEMS_LOADING
} from '../reducers/items'

export const deleteItem = (id) => async dispatch => {
  const URL_DELETE = `http://localhost:9001/task/delete/${id}`
  dispatch({
    type: REQ_ITEMS_LOADING,
    payload: {}
  })
  try {
    await axios.delete(URL_DELETE)

    return getItems()(dispatch)
  } catch(error) {
    return dispatch({
      type: REQ_ITEMS_ERROR,
      payload: {
        data: error.message
      }
    })
  }
}
