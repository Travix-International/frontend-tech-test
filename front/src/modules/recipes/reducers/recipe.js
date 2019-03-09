export const RECIPE_SUCCESS = 'local/RECIPE_SUCCESS'
export const RECIPE_CLEAN = 'local/RECIPE_CLEAN'
export const RECIPE_ERROR = 'local/RECIPE_ERROR'

const initialState = {
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null
      }
    case RECIPE_ERROR:
      return {
        ...state,
        error: action.payload.data
      }
    case RECIPE_CLEAN:
      return {
        ...state,
        error: null,
        data: []
      }
    default:
      return state
  }
}
