import React, { Component, Fragment } from 'react';

import ToDoHeader from '../../components/ToDoHeader/ToDoHeader';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import './ToDoApp.scss';

class ToDoApp extends Component {
    render() {
        return (
          <Fragment>
              <ToDoHeader title="ToDo App"/> 
              <div className="toDoApp">
                <AddToDo placeholder="I want to..." />
                <ToDoList />
              </div>
          </Fragment>  
        )
    }
}

export default ToDoApp;