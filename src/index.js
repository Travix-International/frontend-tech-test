import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ToDoList from './pages/ToDoList/index';

console.log(ToDoList);

render((
    <Router>
        <ToDoList/>
    </Router>
), document.getElementById('root'));
