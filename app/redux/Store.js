//Third Party
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Reducers
import CombinedReducers from './reducers/Reducer'

//Sagas
import { FetchTODOSaga } from './sagas/FetchTODOSaga'
import { AddTODOSaga } from './sagas/AddTODOSaga'
import { DoneTODOSaga } from './sagas/DoneTODOSaga'
import { UpdateTODOSaga } from './sagas/UpdateTODOSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    CombinedReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(FetchTODOSaga);
sagaMiddleware.run(AddTODOSaga);
sagaMiddleware.run(DoneTODOSaga);
sagaMiddleware.run(UpdateTODOSaga);

export default store