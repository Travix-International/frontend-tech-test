import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from "./App";
import ToDoNewContainer from './containers/ToDoNewContainer';
import ToDoEditContainer from './containers/ToDoEditContainer';
import ToDoItemContainer from './containers/ToDoItemContainer';

export default (
    <Router>
        <div>
        <Route path="/" component={App} />
        <Route path="/task/new/:id" component={ToDoNewContainer} />
        <Route path="/task/edit/:id" component={ToDoEditContainer} />
        <Route path="/task/:id" component={ToDoItemContainer} />
        </div>
    </Router>
);
