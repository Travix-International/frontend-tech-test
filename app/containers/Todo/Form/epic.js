import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import request from 'utils/request';
import { actionTypes as at } from './constants';
import { selectTitle, selectDescription } from './selectors';
import { saveSuccess, saveError } from './actions';

const onSave = (action$, store) => {
  return action$
    .ofType(at.SAVE)
    .mergeMap(() => {
      const title = selectTitle()(store.getState());
      const description = selectDescription()(store.getState());
      const requestURL = `http://localhost:3000/task/create/${title}/${description}`;

      return Observable
        .fromPromise(
          request(requestURL, {
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
