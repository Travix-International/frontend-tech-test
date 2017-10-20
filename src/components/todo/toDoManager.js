import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import ToDoList from './toDoList'
import AddToDoList from './addToDoList';

class TodoManager extends Component{
    render(){
        return(
            <div>
                <Well>
                    <h2>Add ToDo Task:</h2>
                    <AddToDoList />
                </Well>
                
                <Well>
                    <h2> TODO List </h2>
                    <ToDoList />
                </Well>
            </div>
        );
    }
}

export default TodoManager;