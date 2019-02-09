import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import 'toastr/build/toastr.css';
import FormContainer from "./components/container/FormContainer.jsx";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FormContainer />, document.getElementById('create-article-form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
