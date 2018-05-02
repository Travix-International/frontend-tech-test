import React, { Component } from 'react';
import AddToDo from './components/AddToDo/index';
import ToDoList from './components/ToDoList/index';
import * as styles from './index.scss';

export default class ToDoApp extends Component {
    render() {
        return (
            <div className={styles.toDoApp}>
                <AddToDo />
                <ToDoList />
            </div>
        );
    }
}
