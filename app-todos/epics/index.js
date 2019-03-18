import { combineEpics } from 'frint-store';

import { fetchTodosAsync$, addTodoAsync$ } from './todo';

export default combineEpics(
    fetchTodosAsync$, addTodoAsync$
);
