import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import todoListReducer from './reducers/todoListReducer';
import serverReducer from './reducers/serverReducer';
import paginationReducer from './reducers/paginationReducer';

const reducer = combineReducers({
  todoList: todoListReducer,
  server: serverReducer,
  pagination: paginationReducer,
  form: formReducer
});

export default reducer;
