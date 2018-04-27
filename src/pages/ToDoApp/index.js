import React, { Component } from 'react';
import AddToDo from './components/AddToDo/index';
import ToDoList from './components/ToDoList/index'

export default class ToDoApp extends Component {
    render() {
        return (
            <div>
                <AddToDo/>
                <ToDoList/>
            </div>
        )
    }
}