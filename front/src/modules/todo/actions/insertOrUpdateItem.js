import axios from 'axios'
import {getItems} from './getItems'
import {
  REQ_ITEMS_ERROR,
  REQ_ITEMS_LOADING
} from '../reducers/items'

export const insertOrUpdateItem = (item) => async dispatch => {
  const URL_INSERT = `http://localhost:9001/task/create/${item.title}/${item.description}`
  const URL_UPDATE = `http://localhost:9001/task/update/${item.id}/${item.title}/${item.description}`
  dispatch({
    type: REQ_ITEMS_LOADING,
    payload: {}
  })
  try {
    if(!item.id) await axios.post(URL_INSERT)
    if(item.id) await axios.put(URL_UPDATE)

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
