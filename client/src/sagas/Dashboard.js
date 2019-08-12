import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchStatsSuccess } from 'actions/Dashboard';
import { FETCH_STATS } from 'constants/ActionTypes';

const getStats = async () =>

  await fetch('http://localhost:9001/tasks/stats')
    .then(response => response.json())
    .then(data => data.stats)
    .catch(error => error);

function* fetchStatsRequest() {
  try {
    const fetchedStats = yield call(getStats);
    yield put(fetchStatsSuccess(fetchedStats));
  } catch (error) {
    //yield put(showTodoMessage(error));
  }
}


export function* fetchStats() {
  yield takeEvery(FETCH_STATS, fetchStatsRequest);
}



export default function* rootSaga() {
  yield all([fork(fetchStats)]);
}