import React, { Component, Fragment } from 'react';
import AddToDo from './components/AddToDo/index';
import ToDoList from './components/ToDoList/index';
import * as styles from './index.scss';

export default class ToDoApp extends Component {
    render() {
        return (
            <Fragment>
                <h1 className={styles.title}>Travix ToDo App</h1>
                <div className={styles.toDoApp}>
                    <AddToDo />
                    <ToDoList />
                </div>
            </Fragment>
        );
    }
}
