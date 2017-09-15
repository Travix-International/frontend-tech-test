import { render } from 'frint-react';

import App from './app';

import './main.scss';

window.app = new App();

render(
  window.app,
  document.getElementById('todo-app')
);
