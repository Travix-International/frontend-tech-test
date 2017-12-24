import { fork } from 'redux-saga/effects';

import taskPostSaga from './taskPostSaga';
import tasksGetSaga from './tasksGetSaga';
import taskDeleteSaga from './taskDeleteSaga';
import taskUpdateSaga from './taskUpdateSaga';
import taskGetSaga from './taskGetSaga';

export default function* rootSaga() {
	yield [
		fork(tasksGetSaga),
		fork(taskPostSaga),
		fork(taskDeleteSaga),
		fork(taskGetSaga),
		fork(taskUpdateSaga)
	];
}
