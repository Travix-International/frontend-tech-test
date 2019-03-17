import { combineEpics } from 'frint-store';

import fetchTodosAsync$ from './todo';

export default combineEpics(fetchTodosAsync$);
