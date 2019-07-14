import io from "socket.io-client";
import { combineEpics, ofType } from "redux-observable";
import { fromEvent } from "rxjs";
import { merge } from "rxjs/observable/merge";
import { tap, map, mergeMap, takeUntil, ignoreElements } from "rxjs/operators";
import {
  types,
  externalCreate,
  externalChange,
  externalRemove,
} from "../actions";

let socket = null;

const openConnection = () => {
  const { pathname } = window.location;

  socket = io(process.env.REACT_APP_API_HOST, {
    reconnectionDelay: 15000,
    path: `${pathname}/socket.io`.replace("//", "/"),
  });
};

const closeConnection = () => {
  if (socket && socket.connected) {
    socket.disconnect();
  }
};

const socketConnect = action$ => {
  return action$.pipe(
    ofType(types.socketConnect),
    tap(openConnection),
    mergeMap(() => {
      return merge(
        fromEvent(socket, "task:create").pipe(map(externalCreate)),
        fromEvent(socket, "task:change").pipe(map(externalChange)),
        fromEvent(socket, "task:remove").pipe(map(externalRemove))
      ).pipe(takeUntil(socketDisconnect(action$)));
    })
  );
};

const socketDisconnect = action$ => {
  return action$.pipe(
    ofType(types.socketDisconnect),
    tap(closeConnection),
    ignoreElements()
  );
};

export default combineEpics(socketConnect, socketDisconnect);
