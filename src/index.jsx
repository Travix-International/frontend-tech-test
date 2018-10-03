import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { combineForms } from 'react-redux-form';
import { Provider } from 'react-redux';
import { allReducer ,getInitialData } from './reducers';
import TodoComponent from './components/TodoComponent';


const middleWare = applyMiddleware(thunk);
const store = createStore(allReducer, middleWare);
/**combineForms({
    user: initialUser,
} */

global.store = store; //for debugging purpose
getInitialData();

ReactDOM.render(
    <Provider store={store}>
        <TodoComponent />
    </Provider>,
    document.getElementById('todo-root'),
);
