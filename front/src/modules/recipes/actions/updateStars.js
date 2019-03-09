import {
  REQ_RECIPES_SUCCESS,
} from '../reducers/recipes'

export const updateStars = (id, newValue) => async (dispatch, getState) => {
  const states = getState()
  const { recipes: { recipes: { data } } } = states
  const updateItens = data.map((item) => {
    if(item.id === id) {
      item.rating = parseFloat(newValue)
    }
    return item
  })

  return dispatch({
    type: REQ_RECIPES_SUCCESS,
    payload: {
      data: updateItens
    }
  })
}
