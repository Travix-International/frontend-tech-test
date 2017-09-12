import _ from 'lodash';
import { createApp } from 'frint';
import { createStore } from 'frint-store';
import { RegionService } from 'frint-react';
import HashRouterService from 'frint-router/BrowserRouterService';

import RootComponent from '../components/Root';
import { requestTodos } from '../actions/todos';
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
        return new Store();
      },
      deps: ['app'],
    },
    {
      name: 'router',
      useFactory: function () {
        return new HashRouterService();
      },
      cascade: true,
    },
    {
      name: 'region',
      useClass: RegionService,
    }
  ],
});
