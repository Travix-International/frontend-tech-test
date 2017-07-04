import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main/reducer';

const reducersCombined = combineReducers({
  main,
  routing: routerReducer
});

export default reducersCombined;
