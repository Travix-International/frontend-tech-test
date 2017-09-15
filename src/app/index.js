import { createApp } from 'frint';
import { createStore } from 'frint-store';

import rootReducer from '../reducers';

import RootComponent from '../components/Root';

export default createApp({
  name: 'TodoApp',
  providers: [
    {
      name: 'component',
      useValue: RootComponent
    },
    {
      name: 'store',
      useFactory: ({ app }) => {
        const Store = createStore({
          reducer: rootReducer,
          thunkArgument: { app }
        });
        return new Store();
      },
      deps: ['app']
    }
  ]
});
