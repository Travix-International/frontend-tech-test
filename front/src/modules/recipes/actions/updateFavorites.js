import {
  REQ_RECIPES_SUCCESS,
} from '../reducers/recipes'

export const updateFavorites = (id) => async (dispatch, getState) => {
  const states = getState()
  const { recipes: { recipes: { data } } } = states
  const updateItens = data.map((item) => {
    if(item.id === id) {
      if(item.favorited) {
        item.favorites = item.favorites - 1
        item.favorited = false
        return item
      }
      item.favorites = item.favorites + 1
      item.favorited = true
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
