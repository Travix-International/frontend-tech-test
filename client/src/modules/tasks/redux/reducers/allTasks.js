import { handleActions } from 'redux-actions';
import successCase from './cases/allTasks/fetchTasksSuccess';
import {
  setLoading as loadingCase,
  setError as errorCase,
} from './cases/http';
import { state as stateFactory } from '../factories';

import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
} from '../actionTypes';

const reducer = handleActions({
  [FETCH_TASKS_SUCCESS]: successCase,
  [FETCH_TASKS_LOADING]: loadingCase,
  [FETCH_TASKS_ERROR]: errorCase,
}, stateFactory());

export default reducer;
