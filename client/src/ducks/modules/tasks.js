import TasksFetcher from '../../api/TasksFetcher'
import TaskCreator from '../../api/TaskCreator'
import TaskUpdater from '../../api/TaskUpdater'
import TaskDeleter from '../../api/TaskDeleter'

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

export const updateTask = (payload, Updater = TaskUpdater) => {
  return (dispatch) => {
    const updater = new Updater()
    return updater.update(payload).then(() => {
      return dispatch({
        type: TASKS_UPDATE_ITEM,
        payload: payload
      })
    })
  }
}

export const deleteTask = (payload, Deleter = TaskDeleter) => {
  return (dispatch) => {
    const deleter = new Deleter()
    return deleter.delete(payload).then(() => {
      return dispatch({
        type: TASKS_DELETE_ITEM,
        payload: payload
      })
    })
  }
}

export const createTask = (payload, Creator = TaskCreator) => {
  return (dispatch) => {
    const creator = new Creator()
    return creator.create(payload).then((result) => {
      return dispatch({
        type: TASKS_CREATE_ITEM,
        payload: {
          ...payload,
          id: result.id
        }
      })
    })
  }
}

// Initial State

export const initialState = {
  items: [],
  loading: true
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
        items: action.payload,
        loading: false
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
          {
            ...action.payload,
            id: state.items.length
          }
        ]
      }
    default:
      return state
  }
}
