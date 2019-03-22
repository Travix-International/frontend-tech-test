import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { filter } from 'rxjs/operators/filter';

import {
    TODOS_FETCH,
    TODOS_FETCH_ASYNC,
    TODOS_ADD,
    TODOS_ADD_ASYNC,
    TODOS_DELETE,
    TODOS_DELETE_ASYNC,
    TODOS_UPDATE,
    TODOS_UPDATE_ASYNC,
    TODOS_LOAD_MORE_ASYNC,
    TODOS_FAILED,
} from '../constants';

//TODO: Change to enviroment variable
const urlApi = "http://localhost:9001/tasks";

export function fetchTodosAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_FETCH_ASYNC),
            mergeMap(() => {
                return Observable.ajax.getJSON(urlApi)
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
            mergeMap((parameters) => {
                return Observable.ajax.post(urlApi,
                    JSON.stringify({
                        title: parameters.title,
                        description: parameters.description
                    }), { 'Content-Type': 'application/json' })
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

export function deleteTodoAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_DELETE_ASYNC),
            mergeMap((parameters) => {
                return Observable.ajax.delete(`${urlApi}/${parameters.id}`)
                    .map(() => ({
                        type: TODOS_DELETE,
                        id: parameters.id
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

export function updateTodoAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_UPDATE_ASYNC),
            mergeMap((parameters) => {
                return Observable.ajax.put(`${urlApi}/${parameters.id}`,
                    JSON.stringify({
                        title: parameters.title,
                        description: parameters.description
                    }), { 'Content-Type': 'application/json' })
                    .map(() => ({
                        type: TODOS_UPDATE,
                        id: parameters.id,
                        title: parameters.title,
                        description: parameters.description
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


export function loadMoreAsync$(action$) {
    return action$
        .pipe(
            filter(action => action.type === TODOS_LOAD_MORE_ASYNC),
            mergeMap(() => {
                return Observable.ajax.getJSON(urlApi)
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