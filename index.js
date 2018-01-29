import { render } from 'frint-react';
import { createApp } from 'frint';
import { createStore } from 'frint-store';
import { BrowserRouterService } from 'frint-router';
import rootReducer from './reducers';

import RootComponent from './components/Root';
import todoList from './mocks/todoList';

const todoApp = new (createApp({
  name: 'TodoApp',

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
            todoList,
          },
          reducer: rootReducer,
          deps: { app },
        });

        return new Store();
      },
      deps: ['app'],
    },
    {
      name: 'router',
      useFactory: () => new BrowserRouterService(),
      cascade: true,
    },
  ],
}))();
render(todoApp, document.getElementById('root'));
