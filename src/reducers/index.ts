import { combineReducers, Reducer } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {routerReducer} from 'react-router-redux';
import {default as appReducer, REDUCER_NAME__APP} from "../app/App.reducer";

const conf: any = {
    routing: routerReducer,
    form: formReducer,
    toastr: toastrReducer,
    [REDUCER_NAME__APP]: appReducer
};

export default function createReducer(asyncReducers: Reducer<any>) {
    return combineReducers({
        ...conf,
        ...asyncReducers
    });
}