import dialog from '../../src/reducer/dialog.js';
import { SHOW_DIALOG, HIDE_DIALOG } from '../../src/constants/actions.js';

describe('Dialog reducer', () => {
  it('Show dialog', () => {
    expect(
      dialog(false, {
        type: SHOW_DIALOG
      })
    ).toBe(true);
  });

  it ('Hide dialog', () => {
    expect(
      dialog(false, {
        type: HIDE_DIALOG
      })
    ).toBe(false);
  });
});