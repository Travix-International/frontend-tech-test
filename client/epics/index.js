import { combineEpics } from 'frint-store';

import todoEpic$ from './todos';

export default combineEpics(todoEpic$);
