import {
  INSERT_TODO,
  FETCH_ALL_TODO,
  INSERT_TODO_SUCCESS,
  FETCH_ALL_TODO_SUCCESS,
  SELECTED_TODO_SUCCESS,
  ON_TODO_UPDATE_SUCCESS,
  ON_BATCH_TODO_UPDATE,
  ON_BATCH_TODO_UPDATE_SUCCESS,
  GET_ALL_TODO,
  GET_NAV_FILTERS,
  GET_NAV_LABELS,
  GET_STARRED_TODO,
  GET_UNSELECTED_ALL_TODO,
  GET_UNSTARRED_TODO,
  HANDLE_REQUEST_CLOSE,
  ON_DELETE_TODO,
  ON_HIDE_LOADER,
  ON_LABEL_MENU_ITEM_SELECT,
  ON_LABEL_SELECT,
  ON_LABEL_UPDATE,
  ON_OPTION_MENU_SELECT,
  ON_SORTEND,
  ON_TODO_ADD,
  ON_TODO_CHECKED,
  ON_TODO_SELECT,
  ON_TODO_UPDATE,
  ON_TOGGLE_DRAWER,
  SEARCH_TODO,
  SELECT_ALL_TODO,
  SET_CURRENT_TODO_NULL,
  SHOW_MESSAGE,
  UPDATE_SEARCH,
  DELETE_TODO_SUCCESS
} from 'constants/ActionTypes'


export const fetchTodo = () => {
  return {
    type: FETCH_ALL_TODO
  };
};
export const insertTodo = (todo) => {
  return {
    type: INSERT_TODO,
    payload: todo
  };
};

export const fetchTodosSuccess = (mails) => {
  return {
    type: FETCH_ALL_TODO_SUCCESS,
    payload: mails
  }
};

export const insertTodoSuccess = (data) => {
  return {
    type: INSERT_TODO_SUCCESS,
    payload: data
  };
};

export const selectTodoSuccess = (data) => {
  return {
    type: SELECTED_TODO_SUCCESS,
    payload: data
  };
};

export const updateTodoSuccess = (data) => {
  return {
    type: ON_TODO_UPDATE_SUCCESS,
    payload: data
  };
};

export const updateBatchTodoSuccess = (data) => {
  return {
    type: ON_BATCH_TODO_UPDATE_SUCCESS,
    payload: data
  };
};


export const onTodoBatchUpdate = (data) => {
  return {
    type: ON_BATCH_TODO_UPDATE,
    payload: data
  };
};

export const deleteTodoSuccess = (data) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: data
  };
};

export const showTodoMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};
export const onSortEnd = (data) => {
  return {
    type: ON_SORTEND,
    payload: data
  };
};

export const onOptionMenuSelect = () => {
  return {
    type: ON_OPTION_MENU_SELECT,
  };
};
export const onLabelSelect = () => {
  return {
    type: ON_LABEL_SELECT,
  };
};
export const selectAllTodo = () => {
  return {
    type: SELECT_ALL_TODO,
  };
};
export const getAllTodo = () => {
  return {
    type: GET_ALL_TODO,
  };
};


export const getUnselectedAllTodo = () => {
  return {
    type: GET_UNSELECTED_ALL_TODO,
  };
};

export const getStarredToDo = () => {
  return {
    type: GET_STARRED_TODO,
  };
};

export const getUnStarredTodo = () => {
  return {
    type: GET_UNSTARRED_TODO,
  };
};

export const onLabelMenuItemSelect = (label) => {
  return {
    type: ON_LABEL_MENU_ITEM_SELECT,
    payload: label
  };
};
export const onLabelUpdate = (data) => {
  return {
    type: ON_LABEL_UPDATE,
    payload: data
  };
};

export const onToDoUpdate = (data) => {
  return {
    type: ON_TODO_UPDATE,
    payload: data
  };
};

export const onDeleteToDo = (data) => {
  return {
    type: ON_DELETE_TODO,
    payload: data
  };
};
export const getNavFilters = (data) => {
  return {
    type: GET_NAV_FILTERS,
    payload: data
  };
};
export const getNavLabels = (data) => {
  return {
    type: GET_NAV_LABELS,
    payload: data
  };
};

export const onSearchTodo = (searchText) => {
  return {
    type: SEARCH_TODO,
    payload: searchText
  };
};
export const onTodoChecked = (data) => {
  return {
    type: ON_TODO_CHECKED,
    payload: data
  };
};
export const onTodoAdd = (data) => {
  return {
    type: ON_TODO_ADD,
    payload: data
  };
};
export const onTodoSelect = (todo) => {
  return {
    type: ON_TODO_SELECT,
    payload: todo
  };
};
export const setCurrentToDoNull = () => {
  return {
    type: SET_CURRENT_TODO_NULL,
  };
};

export const toDoToggleDrawer = () => {
  return {
    type: ON_TOGGLE_DRAWER,
  };
};

export const updateSearch = (searchTodo) => {
  return {
    type: UPDATE_SEARCH,
    payload: searchTodo
  };
};

export const hideToDoLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};
export const handleToDoMenuRequestClose = () => {
  return {
    type: HANDLE_REQUEST_CLOSE,
  };
};

