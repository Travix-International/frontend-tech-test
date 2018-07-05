import { showDialog, hideDialog } from '../../src/actions/dialog.js';
import { SHOW_DIALOG, HIDE_DIALOG } from '../../src/constants/actions.js';

describe('Dialog actions', () => {
  it('Show dialog', () => {
    const expected = {
      type: SHOW_DIALOG
    }

    expect(showDialog()).toEqual(expected);
  });

  it('Hide dialog', () => {
    const expected = {
      type: HIDE_DIALOG
    }

    expect(hideDialog()).toEqual(expected);
  });
});