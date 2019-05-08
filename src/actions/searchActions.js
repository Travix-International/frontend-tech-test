import { searchActionTypes as st } from './actionTypes';
import { searchTask } from '../utils/api';

export const searchTaskRequest = query => ({
  type: st.SEARCH_TASK_REQUEST,
  payload: query
});

export const searchTaskSuccess = results => ({
  type: st.SEARCH_TASK_SUCCESS,
  payload: results
});

export const searchTaskFail = e => ({
  type: st.SEARCH_TASK_FAIL,
  error: e
});

export const clearSearch = {
  type: st.CLEAR_SEARCH
};

export const searchTaskAction = query => async (dispatch) => {
  dispatch(searchTaskRequest(query));
  try {
    const res = await searchTask(query);
    if (res.status === 200) {
      dispatch(searchTaskSuccess(res.data.results));
    }
  } catch (e) {
    dispatch(searchTaskFail(e));
  }
}