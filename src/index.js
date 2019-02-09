import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import 'toastr/build/toastr.css';

import LayoutContainer from "./components/container/LayoutContainer/LayoutContainer.jsx";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LayoutContainer />, document.getElementById('create-article-form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
