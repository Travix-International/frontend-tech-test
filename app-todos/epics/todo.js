import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';

import {
    TODOS_GET_ASYNC
} from '../constants';
import { getTodos } from '../actions/todos';

export default function fetchTodos$(action$) {
    return action$
        :: filter(action => action.type === TODOS_GET_ASYNC)
        :: map(action => getTodos([
        {
            id: 123,
            title: 'vara todo',
            description: 'descritption trodo'
        }
    ]));
}
