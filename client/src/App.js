import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/todoList.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid list-wrapper">
        <div className="todo-list">
          <div className="header">
            <h3 className="header-title">Your Tasks</h3>
          </div>
          <Route exact path='/' component={TodoList} />
          <Route exact path='/edit/:id' component={EditTodo} />
          <Route exact path='/create' component={CreateTodo} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
