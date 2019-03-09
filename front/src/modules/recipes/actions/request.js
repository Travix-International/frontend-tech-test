import axios from 'axios'
import {
  REQ_RECIPES_SUCCESS,
  REQ_RECIPES_ERROR,
  REQ_RECIPES_LOADING
} from '../reducers/recipes'

const dependencies = {
  axios
}

export const getRecipes = (injection) => async dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)
  const URL_WINNER = 'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json'
  dispatch({
    type: REQ_RECIPES_LOADING,
    payload: {}
  })
  try {
    const { data } = await axios.get(URL_WINNER)
    return dispatch({
      type: REQ_RECIPES_SUCCESS,
      payload: {
        data
      }
    })

  } catch(error) {
    return dispatch({
      type: REQ_RECIPES_ERROR,
      payload: {
        data: error.name
      }
    })
  }
}
