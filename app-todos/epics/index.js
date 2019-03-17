import { combineEpics } from 'frint-store';

import fetchTodos$ from './todo';

export default combineEpics(fetchTodos$);
