export const REQ_RECIPES_SUCCESS = 'result/RECIPES_SUCCESS'
export const REQ_RECIPES_ERROR = 'result/RECIPES_ERROR'
export const REQ_RECIPES_LOADING = 'result/RECIPES_LOADING'

const initialState = {
  data: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_RECIPES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null
      }
    case REQ_RECIPES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.data
      }
    case REQ_RECIPES_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      }
    default:
      return state
  }
}
