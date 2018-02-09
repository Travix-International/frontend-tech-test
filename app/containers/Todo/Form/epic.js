import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import request from 'utils/request';
import { API_URL } from 'containers/App/constants';
import { actionTypes as at } from './constants';
import { selectTitle, selectDescription } from './selectors';
import { saveSuccess, saveError } from './actions';

const onSave = (action$, store) => {
  return action$
    .ofType(at.SAVE)
    .mergeMap(() => {
      const title = selectTitle()(store.getState());
      const description = selectDescription()(store.getState());

      return Observable
        .fromPromise(
          request(`${API_URL}/task/create/${title}/${description}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'json'
            }
          })
        )
        .mergeMap(({ task: data }) => [saveSuccess({ data })])
        .catch(error => Observable.of(saveError(error)));
    });
};

export {
  onSave
};

export default combineEpics(onSave);
