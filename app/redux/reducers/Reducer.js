import { combineReducers } from 'redux'

//Reducers
import TODOReducer from './TODOReducer'
import ModalReducer from './ModalReducer'
import HeaderReducer from './HeaderReducer'

export default combineReducers({
    TODOReducer,
    ModalReducer,
    HeaderReducer
});