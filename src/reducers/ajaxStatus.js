import * as types from '../sagas/actionTypes';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 5) === '_SAVE';
}

export default function ajaxStatusReducer(state = 0, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;    
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}