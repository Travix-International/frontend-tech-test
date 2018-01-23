import { render } from 'frint-react';
import { createApp } from 'frint';

import RootComponent from './components/Root';

const app = new (createApp({
  name: 'MyAppName',

  providers: [
    {
      name: 'component',
      useValue: RootComponent,
    },
  ],
}))();
render(app, document.getElementById('root'));
