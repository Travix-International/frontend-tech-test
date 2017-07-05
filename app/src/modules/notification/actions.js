import {
  NOTIFICATION
 } from './../../constants';

export const notificationAction = (show, success, message) => ({
  type: NOTIFICATION,
  show,
  success,
  message
});

export default notificationAction;