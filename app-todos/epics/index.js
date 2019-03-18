import { combineEpics } from 'frint-store';

import { fetchTodosAsync$, addTodoAsync$, deleteTodoAsync$ } from './todo';

export default combineEpics(
    fetchTodosAsync$,
    addTodoAsync$,
    deleteTodoAsync$
);
