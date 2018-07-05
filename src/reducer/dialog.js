import {
  SHOW_DIALOG,
  HIDE_DIALOG,
  CHANGE_DIALOG_VIEW,
  CHANGE_DIALOG_FIELD
} from '../constants/actions.js';

const initialState = {
  isOpened: false,
  isTodoChanges: false,
  form: {
    title: '',
    description: '',
    subtasks: [],
    tags: []
  }
};

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return { ...initialState, isOpened: true };
    case HIDE_DIALOG:
      return { ...state, isOpened: false };
    case CHANGE_DIALOG_VIEW:
      return { ...state, isTodoChanges: action.payload };
    case CHANGE_DIALOG_FIELD:
      return { ...state, form: { ...state.form, ...action.payload } };
    default:
      return state;
  }
}