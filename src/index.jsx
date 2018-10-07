import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { combineForms } from 'react-redux-form';
import { Provider } from 'react-redux';
import { allReducer, getInitialData } from './reducers';
import ErrorPage from './components/ErrorPage';
import App from './components/App';
import polyfillForApp from './common/polyfill';

const middleWare = applyMiddleware(thunk);
const store = createStore(allReducer, middleWare);
/**combineForms({
    user: initialUser,
} */

polyfillForApp();

const initialData = getInitialData(store.dispatch); // to get all the task on app load

initialData.then(success => ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('todo-root'),
)).catch(error => ReactDOM.render(<ErrorPage />,
	document.getElementById('todo-root'),
));

// global.store = store.getState(); //for debugging purpose