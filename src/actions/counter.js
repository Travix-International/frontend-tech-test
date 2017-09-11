import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants';

export function incrementCounter() {
  return { type: INCREMENT_COUNTER };
}

export function decrementCounter() {
  return { type: DECREMENT_COUNTER };
}

export function incrementCounterAsync() {
  // instead of returning an object, we return a function
  return function (dispatch, getState, { app }) {
    // `dispatch(actionPayload)` can dispatch another action
    // `getState()` returns the current state object
    // `app` is available because of `thunkArgument`

    setTimeout(function () {
      dispatch(incrementCounter()); // increment after 2 seconds
    }, 2000);
  }
}
