import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { filter } from 'rxjs/operators/filter';

import {
    TODOS_ADD,
    TODOS_ADD_ASYNC,
    TODOS_FAILED
} from '../constants';

export default function addTodoAsync$(action$, todo) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_ADD_ASYNC),
            mergeMap(() => {
                return Observable.ajax.post(`http://localhost:9001/task/create/${todo.title}/${todo.description}`)
                    .map(data => ({
                        type: TODOS_ADD,
                        todo: data.task
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