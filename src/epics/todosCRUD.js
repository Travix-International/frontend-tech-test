/* eslint-disable */
import Rx from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import * as ActionTypes from '../actions/ActionTypes'
import { API_HOST } from '../api/constans'
import { receivedTodos, faildTodos } from 'SRC/actions'

// export default function fetchTodos(action$) {
//   return action$.ofType(ActionTypes.REQUESTED_USER_REPOS)
//     .map(action => action.payload.tasks)
//     .switchMap(tasks =>
//       Observable.from(
//         fetch(`${API_HOST}/tasks`)
//           .then(response => response.json())
//         ).map(receivedTodos.bind(null, tasks))
//     )
// }

export function fetchTodos(action$) {
  return action$.ofType(ActionTypes.FETHC_TODOS_REQUESTED)
    .switchMap((action) =>
      Rx.Observable.fromPromise(
        fetch(`${API_HOST}/tasks`)
          .then((res) => res.json())
      )
        .do((a) => console.log('aaa >>>', a.tasks))
        .map((res) => receivedTodos(res.tasks))
        // .takeUntil((action) => action.type === 'FETCH_TODOS_ABORTED')
        .catch((err) => faildTodos(err))
        .startWith({ type: 'FETCH_TODOS_PENDING' })
    )
}

// export default function updateTodos(action$) {
//   return action$.ofType(ActionTypes.UPDATE_TODOS_START)
//       .do((a) => console.log('update todo >>>', a.todo))
//       .map((res) => receivedTodos(res.tasks))
//       // .takeUntil((action) => action.type === 'FETCH_TODOS_ABORTED')
//     )
// }
// export default function fetchTodos(action$) {
//   return action$.ofType(ActionTypes.FETHC_TODOS_REQUESTED)
//     .map((action) => action.loadingTasks)
//     .switchMap(() => {
//       ajax.getJSON(`${API_HOST}/tasks`)
//             // .map((res) => res.items)
//             .map(receivedTodos)
//
//       // ajax.getJSON(`${API_HOST}/tasks`)
//       //   .map(receivedTodos.bind(null, ''))
//     }
//   )
// }
