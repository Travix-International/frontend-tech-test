import {
  NOTIFICATION
} from './../../src/constants';
import { notificationAction } from './../../src/modules/notification/actions';

describe('Notification actions', () => {
  it('Test notification action', () => {
    const show = true;
    const success = true;
    const message = 'Task saved!';
    const expectedAction = {
      type: NOTIFICATION,
      show,
      success,
      message
    };
    expect(notificationAction(show, success, message))
      .toEqual(expectedAction);
  });
});
