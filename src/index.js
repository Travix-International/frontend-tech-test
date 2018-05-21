import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import RootApp from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import addTask from './actions/index';

/* eslint-disable */
ReactDOM.render(RootApp(), document.getElementById('root'));
registerServiceWorker();

window.store = store;
window.addTask = addTask;
/* eslint-enable */
