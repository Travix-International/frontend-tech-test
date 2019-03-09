import {
  RECIPE_SUCCESS,
  RECIPE_ERROR,
  RECIPE_CLEAN
} from '../reducers/recipe'

const ERROR_MESSAGE = 'Recipe not found!'

export const getRecipe = (id) => async (dispatch, getState) => {
  const states = getState()
  const { recipes: { recipes: { data } } } = states

  if(!id) return dispatch({
    type: RECIPE_CLEAN,
    payload: {}
  })

  const recipe = data.filter((item) => {
    if(item.id === id) return true
    return false
  })

  if(recipe.length) return dispatch({
    type: RECIPE_SUCCESS,
    payload: {
      data: recipe[0]
    }
  })

  return dispatch({
    type: RECIPE_ERROR,
    payload: {
      error: ERROR_MESSAGE
    }
  })
}
