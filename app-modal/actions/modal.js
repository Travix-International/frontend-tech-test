import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants';

export function openModal(showEditMode) {
  return {
    type: OPEN_MODAL,
    showEditMode,
    todo
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
