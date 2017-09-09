import { normalize } from 'normalizr';

import {
  REQUEST_TODOS,
  CANCEL_REQUEST_TODOS,
} from '../constants';

import { receiveTodos } from '../actions/todos';
import callApi from './apiCaller';
import * as schema from './schema';

export default function fetchTodos$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODOS)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(callApi('tasks'))
        .map((res) => {
          const payload = normalize(res.tasks, schema.arrayOfTodos)
          return receiveTodos(payload);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODOS))
    });
}
