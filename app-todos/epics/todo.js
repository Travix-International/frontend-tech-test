import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';

import {
    TODOS_FETCH_ASYNC
} from '../constants';
import { fetchTodos } from '../actions/todos';

export default function fetchTodos$(action$) {
    return action$
        :: filter(action => action.type === TODOS_FETCH_ASYNC)
        :: map(action => fetchTodos([
        {
            id: 123,
            title: 'vara todo',
            description: 'descritption trodo'
        }
    ]));
}
