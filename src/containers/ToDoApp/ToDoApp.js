import React, { Component, Fragment } from 'react';

import ToDoHeader from '../../components/ToDoHeader/ToDoHeader';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import * as styles from './ToDoApp.scss';

class ToDoApp extends Component {
    render() {
        return (
          <Fragment>
              <ToDoHeader title="ToDo App"/> 
              <div className={styles.toDoApp}>
                <AddToDo placeholder="I want to..." />
                <ToDoList />
              </div>
          </Fragment>  
        )
    }
}

export default ToDoApp;