import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import todoListReducer from './reducers/todoListReducer';
import serverReducer from './reducers/serverReducer';

const reducer = combineReducers({
  todoList: todoListReducer,
  server: serverReducer,
  form: formReducer
});

export default reducer;
