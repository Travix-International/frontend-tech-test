import _ from 'lodash';
import { createApp } from 'frint';
import { createStore } from 'frint-store';
import { RegionService } from 'frint-react';

import RootComponent from '../components/Root';
import rootReducer from '../reducers';

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
          initialState: {
            todos: {
              records: [
                {
                  id: 0,
                  title: 'First todo title',
                  description: 'Id rhoncus consectetur maximus gravida vitae leo ac posuere sed. Eu ultrices sapien ligula. Pharetra ultricies est laoreet quisque. Porttitor non tempor magna e est.',
                  completed: false,
                },
                {
                  id: 1,
                  title: 'Second todo title',
                  description: 'Id rhoncus consectetur maximus gravida vitae leo ac posuere sed. Eu ultrices sapien ligula. Pharetra ultricies est laoreet quisque. Porttitor non tempor magna e est.',
                  completed: true,
                },
              ]
            },
          },
          reducer: rootReducer,
          thunkArgument: { app },
        });

        return new Store();
      },
      deps: ['app'],
    },
    {
      name: 'region',
      useClass: RegionService,
    }
  ],
});
