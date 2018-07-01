import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './Index.component';
import './index.css';
import {unregister} from './registerServiceWorker';

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);
unregister();
