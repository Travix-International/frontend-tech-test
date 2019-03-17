import { createApp } from 'frint';
import { createStore } from 'frint-store';
import { RegionService } from 'frint-react';

import RootComponent from '../components/Root';
import rootReducer from '../reducers';
import todoEpic$ from '../epics';
import { fetchTodosAsync } from '../actions/todos';

export default createApp({
  name: 'TodosApp',
  providers: [
    {
      name: 'component',
      useValue: RootComponent,
    },
    {
      name: 'store',
      useFactory({ app }) {
        const Store = createStore({
          initialState: {
            todos: {
              records: [
              ]
            },
          },
          reducer: rootReducer,
          epic: todoEpic$,
          deps: { app },
        });

        const store = new Store();
        store.dispatch(fetchTodosAsync());
        return store;
      },
      deps: ['app'],
    },
    {
      name: 'region',
      useClass: RegionService,
    }
  ],
});
