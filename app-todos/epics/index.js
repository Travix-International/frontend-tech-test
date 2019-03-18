import { combineEpics } from 'frint-store';

import {
    fetchTodosAsync$,
    addTodoAsync$,
    deleteTodoAsync$,
    updateTodoAsync$
} from './todo';

export default combineEpics(
    fetchTodosAsync$,
    addTodoAsync$,
    deleteTodoAsync$,
    updateTodoAsync$
);
