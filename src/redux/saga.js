import { all } from 'redux-saga/effects'
import { todosWatchers } from 'redux/ducks/todos'

/* eslint-disable */
export default function* rootSaga() {
  yield all([
    ...todosWatchers,
  ])
}
/* eslint-enable */
