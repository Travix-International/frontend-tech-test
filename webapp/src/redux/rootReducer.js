import { combineReducers } from 'redux';
import sampleActions from './modules/sampleActions';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  sampleActions,
  router: routerReducer
});
