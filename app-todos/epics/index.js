import { combineEpics } from 'frint-store';

import fetchTodosAsync$ from './todo';
import addTodoAsync$ from './add';

export default combineEpics(fetchTodosAsync$, addTodoAsync$);
