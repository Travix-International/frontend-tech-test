import React from 'react';
import Filters from './Filters';
import VisibleTodoList from '../containers/VisibleTodoList';

import AddTodo from '../containers/AddTodo'

const Main = () => (
    <div className="col-md-6 col-md-offset-3">
        <h3>Todo apps</h3>
        <AddTodo />
        <VisibleTodoList />
        {/*<Filters />*/}
    </div>
);
export default Main;

