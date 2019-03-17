import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { filter } from 'rxjs/operators/filter';


import {
    TODOS_FETCH,
    TODOS_FETCH_ASYNC,
    TODOS_FAILED
} from '../constants';

export default function fetchTodosAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_FETCH_ASYNC),
            mergeMap(() => {
                return Observable.ajax.getJSON('http://localhost:9001/tasks')
                    .map(data => ({
                        type: TODOS_FETCH,
                        response: data.tasks,
                    }))
                    .catch(error => [
                        {
                            type: TODOS_FAILED,
                            response: { message: error.message, status: error.status },
                            error: true,
                        },
                    ])
            })
        )
}
