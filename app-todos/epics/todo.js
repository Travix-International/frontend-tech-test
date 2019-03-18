import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { filter } from 'rxjs/operators/filter';

import {
    TODOS_FETCH,
    TODOS_FETCH_ASYNC,
    TODOS_ADD,
    TODOS_ADD_ASYNC,
    TODOS_FAILED
} from '../constants';

//TODO: Change to enviroment variable
const urlApi = "http://localhost:9001";

export function fetchTodosAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_FETCH_ASYNC),
            mergeMap(() => {
                return Observable.ajax.getJSON(`${urlApi}/tasks`)
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

export function addTodoAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_ADD_ASYNC),
            mergeMap((todo) => {
                return Observable.ajax.post(`${urlApi}/task/create/${todo.title}/${todo.description}`)
                    .map(data => ({
                        type: TODOS_ADD,
                        todo: data.response.task
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