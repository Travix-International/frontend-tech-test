import { SHOW_DIALOG, HIDE_DIALOG } from '../constants/actions.js';

export function showDialog() {
  return { type: SHOW_DIALOG };
}
export function hideDialog() {
  return { type: HIDE_DIALOG };
}