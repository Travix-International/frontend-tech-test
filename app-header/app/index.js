import { createApp } from 'frint';
import { RegionService } from 'frint-react';
import { createStore } from 'frint-store';

import RootComponent from '../components/Root';

export default createApp({
  name: 'HeaderApp',
  providers: [
    {
      name: 'component',
      useValue: RootComponent,
    },
    {
      name: 'store',
      useFactory: ({ app }) => {
        const Store = createStore({
          deps: { app },
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
