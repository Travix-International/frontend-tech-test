import { createApp } from 'frint';
import { createStore } from 'frint-store';
import { RegionService } from 'frint-react';
import '../index.scss';

import rootReducer from '../reducers';
import RootComponent from '../components/Root';
export default createApp({
  name: 'TodoApp',
  providers: [
    {
      name: 'component',
      useValue: RootComponent,
    },
    {
      name: 'store',
      useFactory: ({ app }) => {
        const Store = createStore({
          initialState: {
            tasks:null,
            selectedTask:{}
          },

          reducer: rootReducer,
          deps: { app },
        } );
        return new Store();
      },
      deps: ['app'],
    },
    {
      name: 'region',
      useClass: RegionService,
    },
  ],
});
