import { SET_DRAFT, CLEAR_DRAFT } from './types';

export const setDraft = task => ({
  type: SET_DRAFT,
  payload: task
});

export const clearDraft = () => ({
  type: CLEAR_DRAFT
});
