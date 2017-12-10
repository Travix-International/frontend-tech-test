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

//Middlewares
import WebSocketMiddleware from './async/WebSocketMiddleware'

//Create instance of saga middleware
const sagaMiddleware = createSagaMiddleware();

//Create Store
const store = createStore(
    CombinedReducers,
    applyMiddleware(sagaMiddleware)
);

//COnfigure custom Middlwares
const webSocketMiddleware = new WebSocketMiddleware(store);

//Apply sagas to store
sagaMiddleware.run(FetchTODOSaga);
sagaMiddleware.run(AddTODOSaga);
sagaMiddleware.run(DoneTODOSaga);
sagaMiddleware.run(UpdateTODOSaga);

export default store