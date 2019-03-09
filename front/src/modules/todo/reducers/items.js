export const REQ_ITEMS_SUCCESS = 'result/ITEMS_SUCCESS'
export const REQ_ITEMS_ERROR = 'result/ITEMS_ERROR'
export const REQ_ITEMS_LOADING = 'result/ITEMS_LOADING'
export const INSERT_UPDATE_ITEM_SUCCESS = 'result/ITEM_ADD_UPDATE_SUCCESS'

const initialState = {
  data: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null
      }
    case REQ_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.data
      }
    case REQ_ITEMS_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      }
    default:
      return state
  }
}
