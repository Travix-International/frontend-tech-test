import io from 'socket.io-client';
import actionTypes from '../constants/ActionTypes';

const BASE = 'http://localhost:9001';

const socket = io(BASE);

const init = (store) => {
  console.log(store);
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(actionTypes).forEach((type) => {
    console.log(type);
    return socket.on(type, (payload) => {
      console.log(type, payload);
      store.dispatch({ type, todo: payload });
    });
  });
};

export default { init };
