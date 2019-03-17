import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';

import {
    TODOS_GET_ASYNC
} from '../constants';

export default function fetchTodos$(action$) {
    return action$
        :: filter(action => action.type === TODOS_GET_ASYNC)
        :: map(action => {
        // Observable.ajax.getJSON('http://localhost/tasks')
        //     .map(data => ({
        //         type: 'nao sei',
        //         payload: { records: data.items },
        //     }))
        //     .catch(error => [
        //         {
        //             type: 'nao sei tres',
        //             payload: { message: error.message, status: error.status },
        //             error: true,
        //         },
        //     ])
    });
}
