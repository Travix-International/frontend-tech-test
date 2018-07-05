import {
  SHOW_DIALOG,
  HIDE_DIALOG,
  CHANGE_DIALOG_VIEW,
  CHANGE_DIALOG_FIELD
} from '../constants/actions.js';

export function showDialog() {
  return { type: SHOW_DIALOG };
}

export function hideDialog() {
  return { type: HIDE_DIALOG };
}

export function changeDialogView(status) {
  return { type: CHANGE_DIALOG_VIEW, payload: status };
}

export function changeDialogField(fieldObject) {
  return { type: CHANGE_DIALOG_FIELD, payload: fieldObject };
}