import _ from 'lodash';
import { createApp } from 'frint';
import { createStore } from 'frint-store';
import { RegionService } from 'frint-react';

import RootComponent from '../components/Root';
import { REQUEST_TODOS } from '../constants';
import rootReducer from '../reducers';
import todoEpic$ from '../epics';

import css from 'todomvc-app-css/index.css';

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
          initialState: {},
          reducer: rootReducer,
          epic: todoEpic$,
          thunkArgument: { app },
        });
        const store = new Store();
        store.dispatch({ type: REQUEST_TODOS })
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
