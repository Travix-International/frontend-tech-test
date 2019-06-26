import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  taskReducer,
  middleware,
  defaultTaskState,
} from './modules/tasks';
import { defaultListState } from './containers/List';

//itemsReducer
const rootReducer = taskReducer;

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {
    tasks: defaultTaskState,
    tasksList: defaultListState,
  },
  composeEnhancers(applyMiddleware(middleware))
);

export default store;

window.store = store;
