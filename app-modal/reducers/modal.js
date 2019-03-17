import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants';

const INITIAL_STATE = {
  value: false
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, {
        value: true,
        showEditMode: action.showEditMode,
        todo: action.todo
      });

    case CLOSE_MODAL:
      return Object.assign({}, {
        value: false
      });

    default:
      return state;
  }
}
