import dialog from '../../src/reducer/dialog.js';
import { SHOW_DIALOG, HIDE_DIALOG } from '../../src/constants/actions.js';

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

describe('Dialog reducer', () => {
  it('Show dialog', () => {
    expect(
      dialog(initialState, {
        type: SHOW_DIALOG
      })
    ).toEqual({ ...initialState, isOpened: true });
  });

  it ('Hide dialog', () => {
    expect(
      dialog(initialState, {
        type: HIDE_DIALOG
      })
    ).toEqual({ ...initialState, isOpened: false });
  });
});