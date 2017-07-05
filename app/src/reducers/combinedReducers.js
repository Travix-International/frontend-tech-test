import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main';

const reducersCombined = combineReducers({
  main,
  routing: routerReducer
});

export default reducersCombined;
