/* eslint no-undef: "error" */
/* eslint-env browser */

import * as types from '../actions/actionTypes';

/**
 * Client side WebSocket support
 *
 * dispatch: function
 *
 *
 * Use the native WebSocket API to establish a connection
 * This connection will receive updated tasks from server
 */
const sockets = (dispatch) => {
  const HOST = location.origin.replace(/^http/, 'ws');
  const ws = new WebSocket(HOST);

  ws.onopen = () => {
    ws.send('connected');
  };

  /* update store when receiving new tasks */
  ws.onmessage = (event) => {
    dispatch({
      type: types.ADD_TASKS,
      tasks: JSON.parse(event.data),
    });
  };
};

export default sockets;
