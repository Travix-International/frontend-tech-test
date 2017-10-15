import { combineReducers } from 'redux';
import todos from './modules/todos';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  todos,
  router: routerReducer
});
