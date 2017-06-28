import { render } from 'frint-react';

import App from './app';

import './global.scss';

window.app = new App();

render(
  window.app,
  document.getElementById('root')
);
