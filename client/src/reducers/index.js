import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import ToDo from './ToDo';
import Dashboard from './Dashboard';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  toDo: ToDo,
  dashboard: Dashboard
});
