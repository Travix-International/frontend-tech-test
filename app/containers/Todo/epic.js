import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import request from 'utils/request';
import { API_URL } from 'containers/App/constants';
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
      return Observable
        .fromPromise(
          request(`${API_URL}/tasks`, {
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
      return Observable
        .fromPromise(
          request(`${API_URL}/task/update/${id}/${title}/${description}`, {
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
      return Observable
        .fromPromise(
          request(`${API_URL}/task/delete/${id}`, {
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
