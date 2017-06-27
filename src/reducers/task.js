import * as at from './../constants/ActionTypes';

const initialState = {
  form: {
    saving: false,
    saved: false,
    error: null
  },
  list: {
    items: [],
    loading: false,
    loaded: false,
    error: null
  },
  item: {
    data: null,
    loading: false,
    loaded: false,
    error: null
  }
};

export default function reducer(state = initialState, action) {
  const { type, result, error } = action;

  switch (type) {
    case at.TASK_LOAD_LIST:
      return {...state, list: {
        loading: true,
        loaded: false,
        items: [],
        error: null
      }};
    case at.TASK_LOAD_LIST_SUCCESS:
      return {...state, list: {
        loading: false,
        loaded: true,
        items: result.tasks,
        error: null
      }};
    case at.TASK_LOAD_LIST_FAIL:
      return {...state, list: {
        loading: false,
        loaded: false,
        items: [],
        error: error.message
      }};

    case at.TASK_LOAD_ITEM:
      return {...state, item: {
        data: null,
        loading: true,
        loaded: false,
        error: null
      }};
    case at.TASK_LOAD_ITEM_SUCCESS:
      return {...state, item: {
        data: result,
        loading: false,
        loaded: true,
        error: null
      }};
    case at.TASK_LOAD_ITEM_FAIL:
      return {...state, item: {
        data: null,
        loading: false,
        loaded: false,
        error: error.message
      }};

    case at.TASK_CREATE:
    case at.TASK_UPDATE:
      return {...state, form: {
        saving: true,
        saved: false,
        error: null
      }};
    case at.TASK_CREATE_SUCCESS:
      // On task saved event - adding new task from response to our task list in the redux store
      return {...state, form: {
        saving: false,
        saved: true,
        error: null
      }, list: {
        ...state.list,
        items: [...state.list.items, result.task]
      }};
    case at.TASK_CREATE_FAIL:
    case at.TASK_UPDATE_FAIL:
      return {...state, form: {
        saving: false,
        saved: false,
        error: error.message
      }};

    case at.TASK_UPDATE_SUCCESS:
      const listItems = [...state.list.items];
      const itemIdx = listItems.findIndex(item => item.id === action.id);
      if (itemIdx >= 0) {
        listItems[itemIdx] = result.task;
      }

      return {...state, form: {
        saving: false,
        saved: true,
        error: null
      }, list: {
        ...state.list,
        items: listItems
      }};

    case at.TASK_REMOVE:
      return state;
    case at.TASK_REMOVE_SUCCESS:
      // On task removed event - removing task from our task list in the redux store
      const items = [...state.list.items];
      const itemIndex = items.findIndex(item => item.id === action.id);
      if (itemIndex >= 0) {
        items.splice(itemIndex, 1);
      }

      return {...state, list: { ...state.list, items }};
    case at.TASK_REMOVE_FAIL:
      return {...state, list: {
        ...state.list,
        error: error.message
      }};

    default:
      return state;
  }
}

/**
 * Load all tasks
 */
export const loadList = () => ({
  types: [at.TASK_LOAD_LIST, at.TASK_LOAD_LIST_SUCCESS, at.TASK_LOAD_LIST_FAIL],
  promise: ajaxClient => ajaxClient('/tasks')
});

/**
 * Load task by ID
 * @param {Number} id
 */
export const loadItem = id => ({
  types: [at.TASK_LOAD_ITEM, at.TASK_LOAD_ITEM_SUCCESS, at.TASK_LOAD_ITEM_FAIL],
  promise: ajaxClient => ajaxClient(`/task/${id}`)
});

/**
 * Create new task
 * @param {String} title
 * @param {String} description
 */
export const create = (title, description) => ({
  types: [at.TASK_CREATE, at.TASK_CREATE_SUCCESS, at.TASK_CREATE_FAIL],
  promise: ajaxClient => ajaxClient(`/task/create/${encodeURIComponent(title)}/${encodeURIComponent(description)}`, 'POST')
});

/**
 * Update task by ID
 * @param {Number} id
 * @param {String} title
 * @param {String} description
 */
export const update = (id, title, description) => ({
  types: [at.TASK_UPDATE, at.TASK_UPDATE_SUCCESS, at.TASK_UPDATE_FAIL],
  id,
  promise: ajaxClient => ajaxClient(`/task/update/${id}/${encodeURIComponent(title)}/${encodeURIComponent(description)}`, 'PUT')
});

/**
 * Remove task by ID
 * @param {Number} id
 */
export const remove = id => ({
  types: [at.TASK_REMOVE, at.TASK_REMOVE_SUCCESS, at.TASK_REMOVE_FAIL],
  id,
  promise: ajaxClient => ajaxClient(`/task/delete/${id}`, 'DELETE')
});
