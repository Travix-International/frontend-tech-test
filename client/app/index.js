// app/index.js
import { createApp } from 'frint';

import RootComponent from '../components/Root'; // we still need to write this file

export default createApp({
  name: 'Todo',

  providers: [
    {
      name: 'component',
      useValue: RootComponent
    }
  ]
});
