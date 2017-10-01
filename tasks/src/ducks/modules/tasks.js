import TasksFetcher from '../../api/TasksFetcher'

// Constants

const TASKS_FETCH_ITEMS = 'TASKS_FETCH_ITEMS'
const TASKS_UPDATE_ITEM = 'TASKS_UPDATE_ITEM'
const TASKS_DELETE_ITEM = 'TASKS_DELETE_ITEM'
const TASKS_CREATE_ITEM = 'TASKS_CREATE_ITEM'

// Actions Creator

export const fetchTasks = (Fetcher = TasksFetcher) => {
  return (dispatch) => {
    const fetcher = new Fetcher()
    return fetcher.fetch().then((result) => {
      return dispatch({
        type: TASKS_FETCH_ITEMS,
        payload: result.tasks
      })
    })
  }
}

export const updateTask = (payload) => {
  return {
    type: TASKS_UPDATE_ITEM,
    payload: payload
  }
}

export const deleteTask = (payload) => {
  return {
    type: TASKS_DELETE_ITEM,
    payload: payload
  }
}

export const createTask = (payload) => {
  return {
    type: TASKS_CREATE_ITEM,
    payload: payload
  }
}

// Initial State

export const initialState = {
  items: []
}

// Reducer

const updateItems = (items, title, description, shouldUpdate) => {
  return items.map((item) => {
    if (shouldUpdate(item.id)) {
      return {
        ...item,
        title: title,
        description: description
      }
    }
    return item
  })
}

const deleteItem = (items, shouldNotDelete) => {
  return items.filter(shouldNotDelete)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TASKS_FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case TASKS_UPDATE_ITEM:
      return {
        ...state,
        items: updateItems(
          state.items,
          action.payload.title,
          action.payload.description,
          (itemId) => {
            return itemId === action.payload.id
          }
        )
      }
    case TASKS_DELETE_ITEM:
      return {
        ...state,
        items: deleteItem(
          state.items,
          (item) => {
            return item.id !== action.payload.id
          }
        )
      }
    case TASKS_CREATE_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    default:
      return state
  }
}
