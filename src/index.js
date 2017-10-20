import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware ,createStore } from 'redux'
import toDoReducer from './reducers/toDoReducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import _ from 'lodash';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(toDoReducer, middleware)

store.dispatch((dispatch) =>{
    dispatch({type: "FETCH_TASKS_START"});
    axios.get(`http://localhost:9001/tasks`)
    .then(res => {
        dispatch({type: "RECEIVE_TASKS", payload: _.values(res.data.tasks)})
    })
    .catch(err => {
        dispatch({type: "FETCH_TASKS_ERROR", payload: err})
    });
})

// store.subscribe(() => {
//     console.log("Store: " + JSON.stringify(store.getState()));
// })

// store.dispatch({type: "ADD_TODO", payload: {id:1, title:"javi", description:"genio"}});
// store.dispatch({type: "ADD_TODO", payload: {id:3, title:"test", description:"sssssssssss"}});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
