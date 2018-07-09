import {
  SHOW_DIALOG,
  HIDE_DIALOG,
  CHANGE_DIALOG_VIEW,
  CHANGE_DIALOG_FIELD,
  CHANGE_DIALOG_LIST_FIELD
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
    case CHANGE_DIALOG_LIST_FIELD: {
      const { name, value } = action.payload;
      const data = state.form[name];

      if (!data) return state;

      return name === 'subtasks'
        ? changeSubtasks(state, data, value)
        : changeTags(state, data, value);
    }
    default:
      return state;
  }
}

function changeSubtasks(state, data, value) {
  const index = data.findIndex((item) => (item.name === value));

  if (index !== -1) return state;

  return { ...state, form: { ...state.form, 'subtasks': [...data, { name: value, isDone: false }] } };
}

function changeTags(state, data, value) {
  const index = data.findIndex((item) => (item === value));

  if (index !== -1) return state;

  return { ...state, form: { ...state.form, 'tags': [...data, value] } };
}