import { all, call, take, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { createLocationWorker } from 'common/services'
import effects, { fetchTodoList } from 'containers/Todo/sagas'

const worker = createLocationWorker({
  '/tasks': fetchTodoList
})

function* watchRouter() {
  const action = yield take(LOCATION_CHANGE)

  yield call(worker, action)
  yield takeEvery(LOCATION_CHANGE, worker)
}

export default function* rootSaga() {
  yield all([...effects, watchRouter()])
}
