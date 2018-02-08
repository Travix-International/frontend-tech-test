import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import request from 'utils/request';
import { actionTypes as at } from './constants';
import {
  fetchSuccess,
  fetchError,
  updateSuccess,
  updateError,
  removeSuccess,
  removeError
} from './actions';

const onRequest = action$ => {
  return action$
    .ofType(at.FETCH)
    .mergeMap(() => {
      const requestURL = 'http://localhost:3000/tasks';

      return Observable
        .fromPromise(
          request(requestURL, {
            method: 'GET',
            headers: {
              'Content-Type': 'json'
            }
          })
        )
        .mergeMap(({ tasks: data }) => [fetchSuccess({ data })])
        .catch(error => Observable.of(fetchError({ error })));
    });
};

const onUpdate = action$ => {
  return action$
    .ofType(at.UPDATE)
    .pluck('payload')
    .mergeMap(({ id, title, description, index }) => {
      const requestURL = `http://localhost:3000/task/update/${id}/${title}/${description}`;

      return Observable
        .fromPromise(
          request(requestURL, {
            method: 'PUT',
            headers: {
              'Content-Type': 'json'
            }
          })
        )
        .mergeMap(({ task: data }) => [updateSuccess({ data, index })])
        .catch(error => Observable.of(updateError({ id, error, index })));
    });
};

const onRemove = action$ => {
  return action$
    .ofType(at.REMOVE)
    .pluck('payload')
    .mergeMap(({ id, index }) => {
      const requestURL = `http://localhost:3000/task/delete/${id}`;

      return Observable
        .fromPromise(
          request(requestURL, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'json'
            }
          })
        )
        .mergeMap(({ task: data }) => [removeSuccess({ data, index })])
        .catch(error => Observable.of(removeError({ id, error, index })));
    });
};

export {
  onRequest,
  onUpdate,
  onRemove
};

export default combineEpics(onRequest, onUpdate, onRemove);
