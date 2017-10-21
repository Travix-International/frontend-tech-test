import React, { Component } from 'react';
import ToDo from './toDo';

class ToDoList extends Component{
    render(){
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tasksList.map((task) => {
                                return <ToDo task={task} key={task.id}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToDoList;